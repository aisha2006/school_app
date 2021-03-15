import React from 'react';
import {  View,TouchableOpacity,Text } from 'react-native';
import {DrawerItems} from "react-navigation-drawer";
import firebase from "firebase";
//import db from "../config";

export default class SideBarMenu extends React.Component{
    render(){
        return(
            <View>
                <View>
                    <DrawerItems {...this.props}/>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        firebase.auth().signOut();
                        this.props.navigation.navigate("WelcomeScreen");
                    }}>
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

