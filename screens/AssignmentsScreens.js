import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'

export default class AssignmentScreen extends React.Component{
    constructor(){
        super();
        this.state={
            assignmentsList:[]
        }
    }
    
  getAssignmentsList =()=>{
    this.assignment = db.collection("Assignments")
    .onSnapshot((snapshot)=>{
      var assignmentsList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        assignmentsList: assignmentsList
      });
    })
  }

  componentDidMount(){
    this.getAssignmentsList()
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.topic}
        subtitle={item.instructions}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity>
              <Text style={{color:'#ffff'}}>View</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Assignment Screen</Text>
                <TouchableOpacity style={{marginRight:1200}} 
                onPress={()=>{this.props.navigation.navigate("HomeScreen")}}>
                        <Text>
                            back
                        </Text>
                    </TouchableOpacity>
                    <View>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.requestedBooksList}
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
            
          },
});