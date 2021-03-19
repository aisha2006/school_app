import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList , Button} from 'react-native';
import {ListItem} from "react-native-elements";
import firebase from 'firebase';
import db from '../config';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class AssignmentScreen extends React.Component{
    constructor(){
        super();
        this.state={
            assignmentsList:[]
        }
        this.assignmentRef = null;
    }
    
  getAssignmentsList=()=>{
    this.assignmentRef = db.collection("Assignments")
    .onSnapshot((snapshot)=>{
      var assignmentsList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        assignmentsList: assignmentsList
      });
    })
  }

  componentDidMount(){
    this.getAssignmentsList()
    //console.log(this.state.assignmentsList);
  }
  
  componentWillUnmount(){
    this.assignmentRef();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return(
      // <SafeAreaProvider>
      //   <ListItem
      //   key={i}
      //   title={"topic"}
      //   subtitle={"instructions"}
      //   //titleStyle={{ color: 'black', fontWeight: 'bold' }}
      //   // rightElement={  
      //   //       <Text style={{color:'red'}}>View</Text>
            
      //   //   }
      //  // bottomDivider
      // />
      // </SafeAreaProvider>
      
      <View>
        <Text>{item.topic}</Text>
        <Text>{item.submission_date}</Text>
        <Button
        onPress={()=>{this.props.navigation.navigate("getAssignmentsDetails")}}
        title={"View"}
        />
      </View>
      
    )
  }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Assignment Screen</Text>
                <TouchableOpacity style={{marginRight:1200}} 
                onPress={()=>{this.props.navigation.navigate("Home")}}>
                        <Text>
                            back
                        </Text>
                    </TouchableOpacity>
                 

                      {
                        this.state.assignmentsList.length === 0? (
                          <View>
                            <Text>No assignments</Text>
                          </View>
                        ) : (
                          <View>
                        <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.assignmentsList}
                        renderItem={this.renderItem}
                      />
                      </View>
                        )
                      }
                    
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