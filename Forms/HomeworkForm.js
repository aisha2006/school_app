import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import firebase from "firebase";
import db from '../config'

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