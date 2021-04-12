import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  Modal,
  ScrollView,
  KeyboardAvoidingView
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
      NoOfTeachers:'',
      NoOfStudents:'',
      isModalVisible:false,
      address:"",
      confirmPassword:'',
      //schoolId:firebase.auth().currentUser.email
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
          db.collection("Schools").add({
            Name: this.state.schoolName,
            Email: this.state.emailId,
            Location: this.state.address,
            NoOfTeachers: this.state.NoOfTeachers,
            NoOfStudents:this.state.NoOfStudents,
          });
          return Alert.alert("User Added Successfully", "", [
            {
              text: "OK",
              onPress: () => this.props.navigation.navigate("SchoolHomeScreen")
            }
          ]);
          this.props.navigation.navigate("SchoolHomeScreen")
          {console.log(this.state.schoolName)}
        }
        )
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

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

  
  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.isModalVisible}
      >
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: "100%" }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text style={styles.modalTitle}>Registration</Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"School Name"}
                onChangeText={text => {
                  this.setState({
                    schoolName: text
                  });
                }}
              />
             
              <TextInput
                style={styles.formTextInput}
                placeholder={"Address"}
                multiline={true}
                onChangeText={text => {
                  this.setState({
                    address: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Email"}
                keyboardType={"email-address"}
                onChangeText={text => {
                  this.setState({
                    emailId: text
                  });
                }}
              />

<TextInput
                style={styles.formTextInput}
                placeholder={"number of teachers"}
                onChangeText={text => {
                  this.setState({
                    NoOfTeachers: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"number of students"}
                onChangeText={text => {
                  this.setState({
                    NoOfStudents: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Password"}
                secureTextEntry={true}
                onChangeText={text => {
                  this.setState({
                    password: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Confrim Password"}
                secureTextEntry={true}
                onChangeText={text => {
                  this.setState({
                    confirmPassword: text
                  });
                }}
              />
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() =>
                    this.userSignUp(
                      this.state.emailId,
                      this.state.password,
                      this.state.confirmPassword
                    )
                  }
                >
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => this.setState({ isModalVisible: false })}
                >
                  <Text style={{ color: "#ff5722" }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.showModal()}
        
        <SafeAreaProvider>
          <Header
            centerComponent={
              <Text
                style={{ fontSize: 30, color: '#ec9706', fontStyle: 'italic' }}>
                Inacademy
              </Text>
            }

            leftComponent={
              <Icon
                name="long-arrow-left"
                type="font-awesome"
                onPress={() => {
                  this.props.navigation.navigate('WelcomeScreen');
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
        <View><Text style={styles.title}>School Login Screen</Text></View>
        <View>
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ isModalVisible: true })}
          >
            <Text>SignUp</Text>
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
