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
import firebase from 'firebase';
import db from '../config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Icon } from 'react-native-elements';

export default class SchoolLoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      schoolName:"",
      emailId: '',
      password: '',
    };
  }

  SchoolLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('SchoolHomeScreen');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <Header
            centerComponent={
              <Text
                style={{ fontSize: 30, color: '#ec9706', fontStyle: 'italic' }}>
                Welcome Screen
              </Text>
            }
            leftComponent={
              <Icon
                type="font-awesome"
                name="university"
                onPress={() => {
                  this.props.navigation.navigate('SchoolHomeScreen');
                }}
              />
            }
            containerStyle={{
              width: 1250,
              height: 50,
              backgroundColor: 'white',
            }}
          />
        </SafeAreaProvider>
        <View></View>
        <View>
        <TextInput
            style={styles.loginBox}
            placeholder="school name"
            onChangeText={(school) => {
              this.setState({ schoolName: school });
            }}
          />

          <TextInput
            style={styles.loginBox}
            keyboardType="email-address"
            placeholder="abc@mail.com"
            onChangeText={(email) => {
              this.setState({ emailId: email });
            }}
          />

          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="enter password"
            placeholderTextColor="gray"
            onChangeText={(password) => {
              this.setState({ password: password });
            }}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.SchoolLogin(this.state.emailId, this.state.password);
            }}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 'center',
    flex: 1,
    backgroundColor: '#1ef5fc',
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
});
