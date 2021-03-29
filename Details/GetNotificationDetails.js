import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList} from 'react-native';
import firebase from "firebase";
import db from '../config'

export default class GetNotificationDetails extends React.Component{
    constructor(){
        super();
        this.state={
            NotificationsList:[]
        }
        this.NotificationRef = null;
    }
    
  getNotificationsList=()=>{
    this.NotificationRef = db.collection("Notifications")
    .onSnapshot((snapshot)=>{
      var NotificationsList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        NotificationsList: NotificationsList
      });
    })
  }

  componentDidMount(){
    this.getNotificationsList()
    //console.log(this.state.NotificationsList);
  }
  
  componentWillUnmount(){
    this.NotificationRef();
  }
  renderItem = ( {item, i} ) =>{
    return(
      <View>
        <Text>{item.title}</Text>
        <Text>{item.message}</Text>
        {/* <Text>{item.date}</Text>   */}
      </View>
      
    )
  }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Notification Screen</Text>
                <TouchableOpacity style={{marginRight:1200}} 
                onPress={()=>{this.props.navigation.navigate("Notifications")}}>
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
                        this.state.NotificationsList.length === 0? (
                          <View>
                            <Text>No Notifications</Text>
                          </View>
                        ) : (
                          <View>
                        <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.NotificationsList}
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