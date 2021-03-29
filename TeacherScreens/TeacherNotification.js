import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import db from '../config';
import {Header,Icon} from "react-native-elements";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default class TeacherNotificationsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      notificationList: [],
    };
    this.notificationRef = null;
  }

  getNotifications = () => {
    this.notificationRef = db
      .collection('Notifications')
      .where('status', '==', 'unread')
      .onSnapshot((doc) => {
        var notifications = [];
        doc.docs.map((data) => {
          var notification = data.data();
          notifications.push(notification);
        });
        this.setState({ notificationList: notifications });
      });
  };

  componentDidMount() {
    this.getNotifications();
  }

  componentWillUnmount() {
    this.notificationRef();
  }

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
      // /><Text>{item.date}</Text>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.message}</Text>

        <Button title={'View'} />
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
                My Notifications
              </Text>
            }
            leftComponent={
              <Icon
                name="long-arrow-left"
                type="font-awesome"
                onPress={() => {
                  this.props.navigation.navigate('TeacherHomeScreen');
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


        <View>
          {this.state.notificationList.length === 0 ? (
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
