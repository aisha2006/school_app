import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import firebase from "firebase";
import db from '../config';
import {Header,Icon} from "react-native-elements";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default class HomeworkForm extends React.Component{
    constructor(){
        super();
        this.state={
            topic:"",
            instructions:"",
            submisson_date:""
        }
    }

    

    addAssignments=()=>{
        db.collection("Assignments").add({
            "topic":this.state.topic,
            "instructions":this.state.instructions,
            "submissionDate":this.state.submisson_date,
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
                Give Assignment
              </Text>
            }
            leftComponent={
              <Icon
                name="long-arrow-left"
                type="font-awesome"
                onPress={() => {
                  this.props.navigation.navigate('GiveAssignments');
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
                placeholder="topic"
                onChangeText={(topic)=>{
                    this.setState({
                        topic:topic
                    })
                }}
                />
                <TextInput
                placeholder="give instructions"
                multiline={true}
                onChangeText={(instructions)=>{
                    this.setState({
                        instructions:instructions
                    })
                }}
                />

                <TextInput
                placeholder="when to submit"
                onChangeText={(submitDate)=>{
                    this.setState({
                        submisson_date:submitDate
                    })
                }}
                />

                
                <TouchableOpacity onPress={()=>{
                    this.addAssignments();
                    this.setState({
                        topic:"",
                        instructions:"",
                        submisson_date:""
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