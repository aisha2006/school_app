import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import firebase from 'firebase';
import db from '../config';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View>
            <SafeAreaProvider>
              <Header
                leftComponent={
                  <Icon
                    name="user"
                    type="font-awesome"
                    color="#696969"
                    onPress={() => {
                      this.props.navigation.navigate('SideBarMenu');
                    }}
                  />
                }
                centerComponent={{
                  text: 'Home Screen',
                  style: { color: '#90A5A9', fontSize: 50, fontWeight: 'bold' },
                }}
                rightComponent={
                  <Icon
                    reverse
                    name="bell"
                    type="font-awesome"
                    color="#696969"
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

            <View />
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Assignments');
            }}>
            <Icon name="book" type="font-awesome" color="#696969" />
            <Text>Assignments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Progress');
            }}>
            <Icon name="trophy" type="font-awesome" color="#696969" />
            <Text>Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('AttendanceScreen');
            }}>
            <Icon name="gift" type="font-awesome" color="#696969" />
            <Text>Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('About');
            }}>
            <Icon name="university" type="font-awesome" color="#696969" />
            <Text>About us</Text>
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
