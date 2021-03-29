import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import firebase from "firebase";
import db from '../config';
import {Header,Icon} from "react-native-elements";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default class NotificationForm extends React.Component{
    constructor(){
        super();
        this.state={
            title:"",
            message:"",
            status:"unread"
        }
    }

    addNotifications=()=>{
        db.collection("Notifications").add({
            "title":this.state.title,
            "message":this.state.message,
            "date": firebase.firestore.FieldValue.serverTimestamp(),
            "status":this.state.status,
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaProvider>
          <Header
            centerComponent={
              <Text
                style={{
                  fontSize: 20,
                  textDecorationColor: 'black',
                  color: 'white',
                  fontStyle: 'italic',
                }}>
                Give Notification
              </Text>
            }
            leftComponent={
              <Icon
                name="long-arrow-left"
                type="font-awesome"
                onPress={() => {
                  this.props.navigation.navigate('GiveNotification');
                }}
              />
            }
            containerStyle={{
              width: 1250,
              height: 50,
              backgroundColor: '#1ef5fc',
            }}
          />
        </SafeAreaProvider>
                <TextInput
                placeholder="title"
                onChangeText={(title)=>{
                    this.setState({
                        title:title
                    })
                }}
                />

                <TextInput
                placeholder="message"
                multiline={true}
                onChangeText={(message)=>{
                    this.setState({
                        message:message
                    })
                }}
                />
                
                <TouchableOpacity onPress={()=>{
                    this.addNotifications();
                    this.setState({
                       title:"",
                       message:"",
                       status:"unread"
                    })
                    }}>
                    <Text>submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        margin:"center",
        flex: 1,
        backgroundColor: '#1ef5fc',
        alignItems: 'center',
        justifyContent: 'center',
      },
          title: {
            fontSize: 65,
            fontWeight: "300",
            paddingBottom: 30,
            color: "white",
            
          },
});