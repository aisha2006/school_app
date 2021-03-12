import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList, Button } from 'react-native';
import db from "../config";

export default class NotificationsScreen extends React.Component{
    constructor(){
        super();
        this.state={
            notificationList:[]
        }
        this.notificationRef = null;
    }
   
    getNotifications = ()=>{
        this.notificationRef = db.collection("Notifications")
        .where("status","==","unread")
        .onSnapshot((doc)=>{
            var notifications=[];
           doc.docs.map((data)=>{
               var notification = data.data();
               notifications.push(notification);
           })
           this.setState({notificationList:notifications});
            
        })
    }
   
    componentDidMount(){
        this.getNotifications();
    }

    componentWillUnmount(){
        this.notificationRef();
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
          <Text>{item.title}</Text>
          <Text>{item.message}</Text>
          
          <Button
          title={"View"}
          />
        </View>
        
      )
    }
   
   
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Notifications Screen</Text>
                <TouchableOpacity style={{marginRight:1200}} 
                onPress={()=>{this.props.navigation.navigate("HomeScreen")}}>
                        <Text>
                            back
                        </Text>
                    </TouchableOpacity>

                    <View>
                        { 
                        this.state.notificationList.length === 0? (
                          <View>
                            <Text>No notifications</Text>
                          </View>
                        ) : (
                          <View>
                        <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.notificationList}
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