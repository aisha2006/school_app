import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,FlatList } from 'react-native';
import firebase from 'firebase';
import db from "../config"

export default class GiveAttendanceScreen extends React.Component{
    constructor(){
        super();
        this.state={
            docId:"",
            StudentsList:[],
            dateOfAttendance:firebase.firestore.FieldValue.serverTimestamp(),
        }
        this.StudentRef= null;
    }
    getUserDetails=()=>{
      var email = firebase.auth().currentUser.email;
      db.collection("Students").where("email","==",email).get()
      .then((snapshot)=>{
          snapshot.forEach((doc)=>{
              var data = doc.data();
              this.setState({
                  docId:      doc.id         
              })
          })
      })
  }

  getStudentsList=()=>{
    this.StudentRef = db.collection("Students")
    .onSnapshot((snapshot)=>{
      var StudentsList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        StudentsList: StudentsList
      });
    })
  }

  componentDidMount(){
    this.getStudentsList()
    this.getUserDetails()
    //console.log(this.state.StudentsList);
  }

  componentWillUnmount(){
      this.StudentRef()
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return(
      // <ListItem
      //   key={i}
      //   title={item.topic}
      //   subtitle={item.instructions}
      //   titleStyle={{ color: 'black', fontWeight: 'bold' }}
      //   rightElement={  
      //         <Text style={{color:'red'}}>View</Text>
            
      //     }
      //   bottomDivider
      // />
      <View>
      <View>
        <Text>{item.name}</Text>
        <TouchableOpacity onPress={()=>{
                db.collection('Students').where("email","==",this.state.docId).get()
                .then((snapshot)=>{
                  snapshot.forEach((doc)=>{
                    db.collection('Students').doc(doc.id).update({
                      present: true,
                      dateOfAttendance:this.state.dateOfAttendance
                  })        
        })
                })
    }}>
            <Text>Present</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                db.collection('Students').where("email","==",this.state.docId).get()
                .then((snapshot)=>{
                  snapshot.forEach((doc)=>{
                      db.collection('Students').doc(doc.id).update({
                      present: false,
                      dateOfAttendance:this.state.dateOfAttendance
                  })
                 
        })
                })
    }}>
            <Text>Absent</Text></TouchableOpacity>
      </View>
     -------------
      </View>
    )
  }
    render(){
        return(
            <View style={styles.container}>
             <Text style={styles.title}>Give Attendance</Text>
                        <View style={styles.box}>
                        <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.StudentsList}
                        renderItem={this.renderItem}
                      />
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
        },
        box:{
          margin:6,
          justifyContent:"flex-start",
          alignSelf:"flex-start"
        }
});