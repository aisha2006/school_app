import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';

export default class GiveNotificationScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
               <View>
          <Text style={styles.title}>Give Notifications</Text>
          <TouchableOpacity style={{marginRight:1200}} 
                onPress={()=>{this.props.navigation.navigate("TeacherHomeScreen")}}>
                        <Text>
                            back
                        </Text>
          </TouchableOpacity>
        </View>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("NotificationForm")}}>
                    <Text>assignments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("NotificationForm")}}>
                    <Text>general</Text>
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
          button: {
            marginBottom:"2%"
        }
});