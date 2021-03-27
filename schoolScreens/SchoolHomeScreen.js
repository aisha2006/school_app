import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppDrawerNavigator } from '../components/AppDrawerNavigator';

export default class SchoolHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <Header
            leftComponent={
              <Icon name="user" type="font-awesome" color="#696969" size={25} />
            }
            centerComponent={{
              text: 'Home Screen',
              style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
            }}
            rightComponent={
              <Icon name="bell" type="font-awesome" color="#696969" size={25} />
            }
            containerStyle={{
              backgroundColor: '#eaf8fe',
              width: 1230,
              marginBottom: 25,
            }}
          />
        </SafeAreaProvider>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('SchoolNotificationForm');
            }}>
            <Text>Give Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('CreateTeacherAccount');
            }}>
            <Text>Create Teacher Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('CreateStudentAccount');
            }}>
            <Text>Create Student Account</Text>
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
