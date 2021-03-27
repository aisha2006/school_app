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

export default class ProgressScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      progressList: [],
    };
    this.progressRef = null;
  }
  getProgressList = () => {
    this.ProgressRef = db.collection('Progress').onSnapshot((snapshot) => {
      var progressList = snapshot.docs.map((doc) => doc.data());
      this.setState({
        progressList: progressList,
      });
    });
  };

  componentDidMount() {
    this.getProgressList();
    //console.log(this.state.progressList);
  }

  // componentWillUnmount(){
  //   this.progressRef();
  // }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
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
        <TouchableOpacity 
         style={{
          borderWidth: 1,
          borderColor: 'blue',
          backgroundColor: '#1ef5fd',
        }}
         onPress={
              ()=>{
                this.props.navigation.navigate("GetProgressDetails")
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
          {this.state.progressList.length === 0 ? (
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
