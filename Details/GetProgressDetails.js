import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList} from 'react-native';
import firebase from "firebase";
import db from '../config'

export default class GetProgressDetails extends React.Component{
    constructor(){
        super();
        this.state={
            ProgressList:[]
        }
        this.ProgressRef = null;
    }
    
  getProgressList=()=>{
    this.ProgressRef = db.collection("Progress")
    .onSnapshot((snapshot)=>{
      var ProgressList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        ProgressList: ProgressList
      });
    })
  }

  componentDidMount(){
    this.getProgressList()
    //console.log(this.state.ProgressList);
  }
  
  componentWillUnmount(){
    this.ProgressRef();
  }
  renderItem = ( {item, i} ) =>{
    return(
      <View>
        <Text>{item.name}</Text>
        <Text>{item.class}</Text> 
        <Text>{item.exam}</Text>
        <Text>{item.marks}</Text> 
        <Text>{item.percentage}</Text>   
        <Text>{item.remarks}</Text>  
      </View>
      
    )
  }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Progress Screen</Text>
                <TouchableOpacity style={{marginRight:1200}} 
                onPress={()=>{this.props.navigation.navigate("Progress")}}>
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
                        this.state.ProgressList.length === 0? (
                          <View>
                            <Text>No Progress</Text>
                          </View>
                        ) : (
                          <View>
                        <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.ProgressList}
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