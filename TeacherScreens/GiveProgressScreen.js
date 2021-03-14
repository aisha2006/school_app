import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class GiveProgressScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
        <View>
          <Text style={styles.title}>Give Progress Report</Text>
          <TouchableOpacity style={{marginRight:1200}} 
                onPress={()=>{this.props.navigation.navigate("TeacherHomeScreen")}}>
                        <Text>
                            back
                        </Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity style={{marginRight:1200}} 
                onPress={()=>{this.props.navigation.navigate("HomeScreen")}}>
                        <Text>
                            back
                        </Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
        style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('ProgressForm');
          }}>
          <Text>english</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('ProgressForm');
          }}>
          <Text>hindi</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('ProgressForm');
          }}>
          <Text>kannada</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('ProgressForm');
          }}>
          <Text>sanskrit</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('ProgressForm');
          }}>
          <Text>marathi</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('ProgressForm');
          }}>
          <Text>science</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('ProgressForm');
          }}>
          <Text>maths</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('ProgressForm');
          }}>
          <Text>social science</Text>
        </TouchableOpacity>
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
    marginBottom:"2%"
}
});
