import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import MyHeader from "../components/MyHeader";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View>
            <MyHeader title={"Home Screen"}/>
            {/* <TouchableOpacity 
                      style={{marginRight:200,alignItems:"center"}}
                      onPress={this.props.navigation.toggleDrawer()}>
                      <Text>sideBar</Text>
                      <Image
                      style={{alignSelf:"center",justifyContent:"center"}}
                      source={require("../assets/hamburger-icon.png")}
                      />
                    </TouchableOpacity>   */}

              {/* <Header
                //leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => this.props.navigation.toggleDrawer()}/>}
                centerComponent={{
                  text: 'Home Screen',
                  style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
                }}
                //backgroundColor="#eaf8fe"
              /> */}
          {/* <View style={{marginRight:1100}}>
            <Icon
              name="bars"
              type="font-awesome"
              color="#696969"
              // onPress={() => {
              //   this.props.navigation.toggleDrawer();
              // }}
            /> 
          </View> */}
          {/* <View><Text style={styles.title}>Home Screen</Text></View> */}
            {/* <View>
              <TouchableOpacity
              style={{alignItems: 'center',alignSelf:"flex-end" }}
              onPress={() => {
                this.props.navigation.navigate('Settings');
              }}>
              <Text>profile</Text>
            </TouchableOpacity>
            </View> */}
            <View/>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Assignments');
            }}>
            <Text>Assignments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Progress');
            }}>
            <Text>Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Notifications');
            }}>
            <Text>My Notfications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Settings');
            }}>
            <Text>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Attendance');
            }}>
            <Text>Attendance</Text>
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
    marginBottom: 50,
    shadowColor: 'black',
    shadowOpacity: 50,
    borderColor: 'white',
    width: 1000,
    borderWidth: 25,
    marginRight: 250,
  },
});
