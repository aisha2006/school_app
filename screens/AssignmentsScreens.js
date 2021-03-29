import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { Header, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class AssignmentScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      assignmentsList: [],
    };
    this.assignmentRef = null;
  }

  getAssignmentsList = () => {
    this.assignmentRef = db.collection('Assignments').onSnapshot((snapshot) => {
      var assignmentsList = snapshot.docs.map((doc) => doc.data());
      this.setState({
        assignmentsList: assignmentsList,
      });
    });
  };

  componentDidMount() {
    this.getAssignmentsList();
    //console.log(this.state.assignmentsList);
  }

  componentWillUnmount() {
    this.assignmentRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      // <SafeAreaProvider>
      //   <ListItem
      //   key={i}
      //   title={"topic"}
      //   subtitle={"instructions"}
      //   //titleStyle={{ color: 'black', fontWeight: 'bold' }}
      //   // rightElement={
      //   //       <Text style={{color:'red'}}>View</Text>

      //   //   }
      //  // bottomDivider
      // />
      // </SafeAreaProvider>

      <View>
        <Text>{item.topic}</Text>
        <Text>{item.submission_date}</Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'blue',
            backgroundColor: '#1ef5fd',
          }}
            onPress={
              ()=>{
                this.props.navigation.navigate("GetAssignmentsDetails")
              }
            }>
          <Text>View</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <Header
            centerComponent={
              <Text
                style={{
                  fontSize: 20,
                  textDecorationColor: 'black',
                  color: 'white',
                  fontStyle: 'italic',
                }}>
                Assignments Screen
              </Text>
            }
            leftComponent={
              <Icon
                name="long-arrow-left"
                type="font-awesome"
                onPress={() => {
                  this.props.navigation.navigate('HomeScreen');
                }}
              />
            }
            containerStyle={{
              width: 1250,
              height: 50,
              backgroundColor: '#1ef5fc',
            }}
          />
        </SafeAreaProvider>

        <View
          style={{
            alignSelf: 'flex-start',
            alignContent: 'flex-start',
            margin: 10,
          }}>
          {this.state.assignmentsList.length === 0 ? (
            <View>
              <Text>No assignments</Text>
            </View>
          ) : (
            <View>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.assignmentsList}
                renderItem={this.renderItem}
              />
            </View>
          )}
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
});
