import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppDrawerNavigator } from '../components/AppDrawerNavigator';
import firebase from "firebase";
import db from "../config"
import { FlatList } from 'react-native-gesture-handler';

export default class SchoolHomeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      schoolDetails:[],
      schoolId:firebase.auth().currentUser.email,
      schoolName:""
    }
    this.schoolRef = null;
  }
//   getUserDetails=()=>{
//     var email = firebase.auth().currentUser.email;
//     db.collection("Schools").where("Email","==",email).get()
//     .then((snapshot)=>{
//         snapshot.forEach((doc)=>{
//             var data = doc.data();
//             this.setState({
//                 schoolName:       data.Name,
//             })
//         })
//     })
// }

// getUserProfile(){
//   db.collection("Schools")
//     .where("Email", "==", this.state.userId)
//     .onSnapshot((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         this.setState({
//           schoolName: doc.data().Name,
         
//         });
//       });
//     });
// }

 componentDidMount(){
    // this.getUserDetails();
    // this.getUserProfile();
    console.log(this.state.schoolName)
  }

  // componentWillUnmount(){
  //   this.schoolRef()
  // }
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <View>
        <Text>{item.Name}</Text>
      </View>
    );
  };

 
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <Header
            leftComponent={
              <Icon name="user" type="font-awesome" color="#696969" size={25} onPress={()=>{this.props.navigation.navigate("SchoolSideBar")}}/>
            }
            centerComponent={
              <Text style={styles.title}>"Home Screen"</Text>
            }
            rightComponent={
              <Icon name="bell" type="font-awesome" color="#696969" size={25} />
            }
            containerStyle={{
              backgroundColor: '#eaf8fe',
              width: 1230,
              marginBottom: 25,
            }}
          />
        </SafeAreaProvider>
       

        <View>
          <View>
             <FlatList
           keyExtractor={this.keyExtractor}
           data={this.state.schoolDetails}
           renderItem={this.renderItem}
           />
          </View>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('SchoolNotificationForm');
            }}>
            <Text>Give Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('CreateTeacherAccount');
            }}>
            <Text>Create Teacher Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('CreateStudentAccount');
            }}>
            <Text>Create Student Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('CreateSchoolAccount');
            }}>
            <Text>Create School Account</Text>
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
  title: {
    fontSize: 65,
    fontWeight: '300',
    paddingBottom: 30,
    color: 'white',
  },

  button: {
    marginBottom: 50,
    shadowColor: 'black',
    shadowOpacity: 50,
    borderColor: 'white',
    width: 1000,
    borderWidth: 25,
    marginRight: 250,
  },
});
