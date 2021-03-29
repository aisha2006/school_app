import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class CreateStudentAccount extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      name: '',
      address: '',
      contact: '',
      confirmPassword: '',
      image: require("../assets/user.png"),
      dob: '',
      isPresent: true,
      dateOfAttendance: '',
      section: '',
      class: '',
    };
  }

  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection('Students').add({
            name: this.state.name,
            contact: this.state.contact,
            email: this.state.emailId,
            address: this.state.address,
            present: this.state.isPresent,
            class: this.state.class,
            dateOfAttendance: this.state.dateOfAttendance,
            dob: this.state.address,
            image: this.state.image,
            section: this.state.section,
          });
          return Alert.alert('User Added Successfully', '', [
            {
              text: 'OK',
              onPress: () => {
                this.props.navigation.navigate('SchoolHomeScreen');
              },
            },
          ]);
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text style={styles.modalTitle}> Student Registration</Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={'name'}
                onChangeText={(text) => {
                  this.setState({
                    name: text,
                  });
                }}
              />

              <TextInput
                style={styles.formTextInput}
                placeholder={'Contact'}
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Address'}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    address: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Email'}
                keyboardType={'email-address'}
                onChangeText={(text) => {
                  this.setState({
                    emailId: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Password'}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Confrim Password'}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    confirmPassword: text,
                  });
                }}
              />

              <TextInput
                style={styles.formTextInput}
                placeholder={'class'}
                onChangeText={(text) => {
                  this.setState({
                    class: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'section'}
                onChangeText={(text) => {
                  this.setState({
                    section: text,
                  });
                }}
              />

              <TextInput
                style={styles.formTextInput}
                placeholder={'dob'}
                onChangeText={(text) => {
                  this.setState({
                    dob: text,
                  });
                }}
              />

              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  
                  onPress={() =>
                   {
                      this.userSignUp(
                      this.state.emailId,
                      this.state.password,
                      this.state.confirmPassword
                    );
                    this.setState({schoolEmail:firebase.auth().currentUser.email})
                    this.props.navigation.navigate('SchoolHomeScreen');}
                  }>
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1ef5fc5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: '#ff5722',
    margin: 50,
  },
  modalContainer: {
    flex: 1,
    borderRadius:50,
    borderWidth: 5,
    borderColor:"black",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ef5fc5',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },
  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: '#ffab91',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  registerButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
  },
  registerButtonText: {
    color: '#ff5722',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
