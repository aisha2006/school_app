import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {AppDrawerNavigator} from "../components/AppDrawerNavigator";

export default class TeacherHomeScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
             <SafeAreaProvider>
               <Header
                leftComponent={
                  <Icon
                    name="user"
                    type="font-awesome"
                    color="#696969"
                    onPress={()=>{this.props.navigation.navigate("TeacherProfile");}}
                  />
                }
                centerComponent={{
                  text: 'Home Screen',
                  style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
                }}
                rightComponent={
                  <Icon
                    name="bell"
                    type="font-awesome"
                    color="#696969"
                    size={25}
                    onPress={() => {
                      this.props.navigation.navigate('Notifications');
                    }}
                  />
                }
                containerStyle={{
                  backgroundColor: '#eaf8fe',
                  width: 1230,
                  marginBottom: 25,
                }}
              />
            </SafeAreaProvider>

                <View>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("GiveAssignments")}}>
                        <Text>
                            Give Assignments
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("GiveAttendance")}}>
                        <Text>
                            Give Attendance
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("GiveProgress")}}>
                        <Text>
                            Give Progress
                        </Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("GiveNotification")}}>
                        <Text>
                            Give Notfications
                        </Text>
                    </TouchableOpacity> 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    margin: 'center',
    flex: 1,
    backgroundColor: '#1ef5fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 65,
    fontWeight: '300',
    paddingBottom: 30,
    color: 'white',
  },

  button: {
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 100,
    width: 1000,
    marginRight: 220,
  },
});