import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList, Button } from 'react-native';
import db from "../config";
import firebase from "firebase";

export default class AttendanceScreen extends React.Component{
    constructor(){
        super();
        this.state={
            AttendanceList:[],
            docId:firebase.auth().currentUser.email
        }
        this.AttendanceRef = null;
    }
   
    getAttendance = ()=>{
        this.AttendanceRef = db.collection("Students")
        .where("email","==",this.state.docId)
        .onSnapshot((doc)=>{
            var Attendance=[];
           doc.docs.map((data)=>{
               var attendance = data.data();
               Attendance.push(attendance);
           })
           this.setState({AttendanceList:Attendance});
            
        })
    }
   
    componentDidMount(){
        this.getAttendance();
    }

    componentWillUnmount(){
        this.AttendanceRef();
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
        // /><Text>{item.date}</Text>
        <View>
          <Text>{"present: "+ item.present + " " + "on: "+ item.dateOfAttendance}</Text>
        </View>
        
      )
    }
   
   
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Attendance Screen</Text>
                <TouchableOpacity style={{marginRight:1200}} 
                onPress={()=>{this.props.navigation.navigate("Home")}}>
                        <Text>
                            back
                        </Text>
                    </TouchableOpacity>
<View>
                    <View>
                        { 
                        this.state.AttendanceList.length === 0? (
                          <View>
                            <Text>No Attendance</Text>
                          </View>
                        ) : (
                          <View>
                        <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.AttendanceList}
                        renderItem={this.renderItem}
                      />
                      </View>
                        )
                      }
                    </View>
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
            
          },
});