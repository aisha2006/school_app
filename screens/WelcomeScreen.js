import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import { Avatar } from "react-native-elements";
import firebase from 'firebase';
import db from '../config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Icon } from 'react-native-elements';

export default class WelcomeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      image:require("../assets/school.jpg")
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom:10}}>
        <SafeAreaProvider>
          <Header
            centerComponent={
              <Text
                style={{ fontSize: 50, color: '#ec9706', fontStyle: 'italic',marginBottom:10 }}>
                Inacademy
              </Text>
            }
            leftComponent={
              <View style={{marginTop:10,marginBottom:10}}>
                 <Icon  
  name='sc-facebook'
  type='evilicon'
  color='#517fa4'
/>

<Icon
name='sc-twitter'
type='evilicon'
color='#517fa4'
/></View>
             
            }
            rightComponent={
              <View style={{marginTop:10,marginBottom:10}}>
              <Icon  
              style={{alignSelf:"center",justifyContent:"center"}}
name='sc-github'
type='evilicon'
color='#517fa4'
size={50}
/>

</View>
            }
            containerStyle={{
              width: 1250,
              height: 50,
              backgroundColor: '#1ef5fc',
            }}
          />
        </SafeAreaProvider>
        </View>
        <View>
        <Avatar
        rounded
            source={{
              uri: this.state.image,
            }}
            size={"xlarge"}
          /> 
          <Text style={styles.introText}>I am a/from</Text>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('StudentLoginScreen')}} style={styles.loginBox}><Text>Student</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('TeacherLoginScreen')}} style={styles.loginBox}><Text>Teacher</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SchoolLoginScreen')}} style={styles.loginBox}><Text>School Authority</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 'center',
    flex: 1,
    backgroundColor: '#1601A35',
    alignItems: 'center',
    justifyContent: 'center',
  },


  loginBox: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#6d9ade',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 65,
    fontWeight: '300',
    paddingBottom: 30,
    color: 'white',
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#a7d1a1',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 20,
  },
  introText:{
    marginTop:50,
  fontFamily:"italic",
  fontSize:30
  }
});
