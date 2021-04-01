import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList} from 'react-native';
import firebase from "firebase";
import db from '../config'

export default class GetAssignmentDetails extends React.Component{
    constructor(){
        super();
        this.state={
            assignmentDetails:[],
            assignmentId: this.props.navigation.getParam('details')["assignmentId"],
        }
        this.assignmentRef = null;
    }
    
  getAssignmentDetails=()=>{
    this.assignmentRef = db.collection("Assignments").where("assignmentId","==",this.state.assignmentId)
    .onSnapshot((snapshot)=>{
      var assignmentsList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        assignmentDetails: assignmentsList
      });
    })
  }
  keyExtractor = (item, index) => index.toString()
  componentDidMount(){
    this.getAssignmentDetails()
    //console.log(this.state.assignmentsList);
  }
  
  componentWillUnmount(){
    this.assignmentRef();
  }
  renderItem = ( {item, i} ) =>{
    return(
      <View>
        <Text>{item.topic}</Text>
        <Text>{item.instructions}</Text>
        <Text>{item.submissionDate}</Text>  
      </View>
      
    )
  }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Assignment Screen</Text>
                <TouchableOpacity style={{marginRight:1200}} 
                onPress={()=>{this.props.navigation.navigate("Assignments")}}>
                        <Text>
                            back
                        </Text>
                    </TouchableOpacity>
                 
                    <View
          style={{
            alignSelf: 'flex-start',
            alignContent: 'flex-start',
            margin: 10,
          }}>
                      {
                        this.state.assignmentDetails.length === 0? (
                          <View>
                            <Text>No assignments</Text>
                          </View>
                        ) : (
                          <View>
                        <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.assignmentDetails}
                        renderItem={this.renderItem}
                      />
                      </View>
                        )
                      }
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