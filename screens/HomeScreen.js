import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View>
                    <TouchableOpacity 
                    style={{marginRight:200}}
                    onPress={this.props.navigation.navigate("Drawer")}>
                      <Text>sideBar</Text>  
                    </TouchableOpacity>
                    <Text style={styles.title}>Home Screen</Text>                
                </View>
                   

                <View>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Assignments")}}>
                        <Text>
                            Assignments
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Progress")}}>
                        <Text>
                            Progress
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Notifications")}}>
                        <Text>
                           My Notfications
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("SettingsScreen")}}>
                        <Text>
                           Settings
                        </Text>
                    </TouchableOpacity>
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

      button:{
          marginBottom:50,
          shadowColor:"black",
          shadowOpacity:50,
          borderColor:"white",
          width:1000,
          borderWidth:25,
          marginRight:250
      }
});