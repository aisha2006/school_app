import React from 'react';
import { render } from 'react-dom';
import { Text, View, Image } from 'react-native';

export default class AboutPage extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('../assets/school.jpg')} />
        <Text>
         things to add:-
         </Text>
         <Text>
           *displaying notifications/assignments according to class
         </Text>
         <Text>
           *displaying progress report according to the name of Students
         </Text>
         <Text>
           *attendance Screen
         </Text>
         <Text>
           *set School Home screen header center component as school name
         </Text>
        
      </View>
    );
  }
}
