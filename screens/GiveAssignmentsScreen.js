import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';

export default class GiveAssignmentScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Give Assignments</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("HomeworkForm")}}>
                    <Text>english</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("HomeworkForm")}}>
                    <Text>hindi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("HomeworkForm")}}>
                    <Text>kannada</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("HomeworkForm")}}>
                    <Text>sanskrit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("HomeworkForm")}}>
                    <Text>marathi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("HomeworkForm")}}>
                    <Text>science</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("HomeworkForm")}}>
                    <Text>maths</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("HomeworkForm")}}>
                    <Text>social</Text>
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