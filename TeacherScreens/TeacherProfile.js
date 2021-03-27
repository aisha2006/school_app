import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import { Avatar } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import firebase from "firebase";
import db from "../config";
import {Header} from "react-native-elements"
import {SafeAreaProvider} from "react-native-safe-area-context";
// import axios from "axios";

export default class SideBarMenu extends Component {
  constructor(props){
    super();
    this.state = {
    userId: firebase.auth().currentUser.email,
    image: "#",
    name: "",
    docId: "",
    emailId:"",
    address:"",
    contact:"",
    dob:"",
  };
  }
  
  getUserDetails=()=>{
    var email = firebase.auth().currentUser.email;
    db.collection("Teachers").where("email","==",email).get()
    .then((snapshot)=>{
        snapshot.forEach((doc)=>{
            var data = doc.data();
            this.setState({
                emailId:    data.email,
                name:       data.name,
                address:    data.address,
                contact:    data.contact,
                dob:        data.dob,
                docId:      doc.id         
            })
        })
    })
}

updateUserDetails=()=>{
    db.collection("Teachers").doc(this.state.docId)
    .update({
        "address": this.state.address,
        "contact": this.state.contact
    })
    Alert.alert("Profile Updated Successfully");
}

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
      })
      .catch((error) => {
        this.setState({ image: "#" });
      });
  };

  getUserProfile() {
    db.collection("Teachers")
      .where("email", "==", this.state.userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            name: doc.data().name,
            docId: doc.id,
            image: doc.data().image,
          });
        });
      });
  }

  componentDidMount() {
    this.fetchImage(this.state.userId);
    this.getUserProfile();
    this.getUserDetails();
  }

  render() {
    return (
      <View style={{ flex: 1,backgroundColor:"#1ef5fc" }}>
        <SafeAreaProvider style={{backgroundColor:"#1ef5fc"}}>
          <Header
          centerComponent={"Profile Settings"}
          leftComponent={<TouchableOpacity style={{marginRight:1200}} 
          onPress={()=>{this.props.navigation.navigate("HomeScreen")}}>
                  <Text>
                      back
                  </Text>
              </TouchableOpacity>}
          containerStyle={{
            backgroundColor: '#eaf8fe',
            width: 1230,
            marginBottom: 25,
          }}
          />
        </SafeAreaProvider>
        <View
          style={{
            flex: 0.5,
            alignItems: "center",
            backgroundColor: "#1ef5fc",
          }}
        >
            <TouchableOpacity  style={{ flex: 1,backgroundColor:"#1ef5fc" }}>
          <Avatar
            rounded
            source={{
              uri: this.state.image,
            }}
            size={"xlarge"}
            onPress={() => this.selectPicture()}
          /> 
            </TouchableOpacity>
           

          <Text style={{ fontWeight: "100", fontSize: 20, paddingTop: 10,backgroundColor:"#1ef5fc" }}>
            {this.state.name}
          </Text>
        </View>
          
       

        <View>
                    <Text>{"Name: "+this.state.name}</Text>
                    <Text>{"Date of Birth: "+this.state.dob}</Text>
                    <TextInput 
                    placeholder={"Address"}
                    multiline
                   numberOfLines = {8}
                    onChangeText = {(text)=>{
                        this.setState({
                            address: text
                        })
                    }}
                    value = {this.state.address}
                    />
                    <TextInput 
                    placeholder={"Contact"}
                    maxLength={10}           
                    onChangeText={(text)=>{
                        this.setState({contact:text});
                    }}
                    value={this.state.contact}
                    />

                    <TouchableOpacity
                    onPress={()=>{this.updateUserDetails()}}
                    >
                        <Text>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.logOutContainer}>
          <TouchableOpacity
            style={styles.logOutButton}
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreen");
              firebase.auth().signOut();
            }}
          >
            <View><Text>Log Out</Text></View>
            
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#1ef5fc"
  },
  drawerItemsContainer: {
    flex: 0.8,
    backgroundColor:"#1ef5fc"
  },
  logOutContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
    paddingBottom: 30,
    backgroundColor:"#1ef5fc"
  },
  logOutButton: {
    height: 30,
    width: "100%",
    justifyContent: "center",
    padding: 10,
    backgroundColor:"white"
  },
  imageContainer: {
    flex: 0.75,
    width: "40%",
    height: "20%",
    marginLeft: 20,
    marginTop: 30,
    backgroundColor:"#1ef5fc",
    borderRadius: 40,
  },
  logOutText: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor:"#1ef5fc"
  },
});
