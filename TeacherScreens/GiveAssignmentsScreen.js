import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import {Header,Icon} from "react-native-elements";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default class GiveAssignmentScreen extends React.Component{
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
                 Give Assignments Screen
              </Text>
            }
            leftComponent={
              <Icon
                name="long-arrow-left"
                type="font-awesome"
                onPress={() => {
                  this.props.navigation.navigate('TeacherHomeScreen');
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