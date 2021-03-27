import React from 'react';
import { render } from 'react-dom';
import { Text, View, Image } from 'react-native';

export default class AboutPage extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('../assets/school.jpg')} />
        <Text>
          Welcome to Cambridge Our aim is to maximise the potential of every
          member of our school, be it child or adult. We are determined that our
          learners will have full access to an independent life in the community
          and pursue education or gain employment when they leave us with a full
          portfolio of qualifications, tailored to meet their individual needs.
          To achieve this, we will personalise the curriculum to ensure that
          each child achieves their goals. Staff will work tirelessly with you
          and your child to make sure that they meet all their academic and
          personal targets. We welcome visitors and are happy to show off our
          school and our students! The best way to judge a school is to immerse
          yourself in its daily routines and experiences. Please do not hesitate
          to contact us at school if you would like to visit.
        </Text>
      </View>
    );
  }
}
