import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,Alert} from 'react-native';
import db from "../config";
import firebase from "firebase";

export default class SettingsScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:"",
            name:"",
            address:"",
            contact:"",
            dob:"",
            class:"",
            section:"",
            docId:""
        }

    }
        getUserDetails=()=>{
            var email = firebase.auth().currentUser.email;
            db.collection("Students").where("email","==",email).get()
            .then((snapshot)=>{
                snapshot.forEach((doc)=>{
                    var data = doc.data();
                    this.setState({
                        emailId:    data.email,
                        name:       data.name,
                        address:    data.address,
                        contact:    data.contact,
                        dob:        data.dob,
                        class:      data.class,
                        section:    data.section,
                        docId:      doc.id         
                    })
                })
            })
        }

        componentDidMount(){
            this.getUserDetails();
        }

        updateUserDetails=()=>{
            db.collection("Students").doc(this.state.docId)
            .update({
                "address": this.state.address,
                "contact": this.state.contact
            })
            Alert.alert("Profile Updated Successfully");
        }
   

    render(){
        return(
            <View>
                <Text>Settings</Text>
                <View>
                    <Text>{"Name: "+this.state.name}</Text>
                    <Text>{"Date of Birth: "+this.state.dob}</Text>
                    <Text>{"Class: "+this.state.class}</Text>
                    <Text>{"Section: "+this.state.section}</Text>
                    <TextInput 
                    placeholder={"Address"}
                    multiline
                   numberOfLines = {8}
                    onChangeText = {(text)=>{
                        this.setState({
                            address: text
                        })
                    }}
                    value = {this.state.address}
                    />
                    <TextInput 
                    placeholder={"Contact"}
                    maxLength={10}           
                    onChangeText={(text)=>{
                        this.setState({contact:text});
                    }}
                    value={this.state.contact}
                    />

                    <TouchableOpacity
                    onPress={()=>{this.updateUserDetails()}}
                    >
                        <Text>Save</Text>
                    </TouchableOpacity>
                </View>
                
            </View>

            
        );
    }
}