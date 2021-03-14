import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import firebase from "firebase";
import db from '../config'

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