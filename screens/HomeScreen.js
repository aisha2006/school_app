import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Header            
                 centerComponent={{text: "Home", 
                 style: {
                    fontSize: 65,
                    fontWeight: "bold",
                    paddingBottom: 30,
                    color: "white"}
                }}
                
                />
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