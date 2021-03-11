import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import firebase from "firebase";
import db from '../config'

export default class ProgressForm extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            class:"",
            exam:"",
            marks:"",
            percentage:"",
            remarks:"",
            subject:""
        }
    }

    addAssignments=()=>{
        db.collection("Progress").add({
            name:this.state.name,
            class:this.state.class,
            exam:this.state.exam,
            marks:this.state.marks,
            percentage:this.state.percentage,
            remarks:this.state.remarks,
            subject:this.state.subject
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                placeholder="name"
                onChangeText={(name)=>{
                    this.setState({
                        name:name
                    })
                }}
                />

                <TextInput
                placeholder="class"
                onChangeText={(clas)=>{
                    this.setState({
                        class:clas
                    })
                }}
                />

                
                <TextInput
                placeholder="subject"
                onChangeText={(subject)=>{
                    this.setState({
                        subject:subject
                    })
                }}
                />

                <TextInput
                placeholder="exam"
                onChangeText={(exam)=>{
                    this.setState({
                        exam:exam
                    })
                }}
                />

                <TextInput
                placeholder="marks"
                onChangeText={(marks)=>{
                    this.setState({
                        marks:marks
                    })
                }}
                />

                <TextInput
                placeholder="percentage"
                onChangeText={(percentage)=>{
                    this.setState({
                        percentage:percentage
                    })
                }}
                />

                <TextInput
                placeholder="remarks"
                multiline={true}
                onChangeText={(remarks)=>{
                    this.setState({
                        remarks:remarks
                    })
                }}
                />

                
                <TouchableOpacity onPress={()=>{
                    this.addAssignments();
                    this.setState({
                        name:"",
                        class:"",
                        exam:"",
                        marks:"",
                        percentage:"",
                        remarks:""
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