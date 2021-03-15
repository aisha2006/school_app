import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList,Button } from 'react-native';
import firebase from "firebase";
import db from "../config"

export default class ProgressScreen extends React.Component{
  constructor(){
    super();
    this.state={
        progressList:[]
    }
    this.progressRef = null;
}
    getProgressList=()=>{
      this.ProgressRef = db.collection("Progress")
      .onSnapshot((snapshot)=>{
        var progressList = snapshot.docs.map((doc) => doc.data())
        this.setState({
          progressList: progressList
        });
      })
    }
  
    componentDidMount(){
      this.getProgressList()
      //console.log(this.state.progressList);
    }
    
    // componentWillUnmount(){
    //   this.progressRef();
    // }
  
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
          <Text>{item.name}</Text>
          <Text>{item.class}</Text>
          <Text>{item.exam}</Text>
          <Text>{item.marks}</Text>
          <Text>{item.percentage}</Text>
          <Text>{item.remarks}</Text>
          <Button
          title={"View"}
          />
        </View>
        
      )
    }
  
      render(){
          return(
              <View style={styles.container}>
                  <Text style={styles.title}>progress Screen</Text>
                  <TouchableOpacity style={{marginRight:1200}} 
                  onPress={()=>{this.props.navigation.navigate("Home")}}>
                          <Text>
                              back
                          </Text>
                      </TouchableOpacity>
                   
  
                        {
                          this.state.progressList.length === 0? (
                            <View>
                              <Text>No progress</Text>
                            </View>
                          ) : (
                            <View>
                          <FlatList
                          keyExtractor={this.keyExtractor}
                          data={this.state.progressList}
                          renderItem={this.renderItem}
                        />
                        <View>
                        <Text>test</Text>
                        </View>
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