import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';

export default class GiveAttendanceScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
             <Text style={styles.title}>Give Attendance</Text>
             <View>
                 <Text></Text>
                 <TouchableOpacity></TouchableOpacity>
                 <TouchableOpacity></TouchableOpacity>
             </View>
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
            alignSelf:"center"
          },
          button: {
            marginBottom:"2%"
        }
});