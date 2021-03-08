
import React from 'react';
import {  View } from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen"
//import AssignmentsScreen from "./screens/AssignmentsScreens"
import HomeScreen from "./screens/HomeScreen"
//import {AppDrawerNavigator} from "./components/AppDrawerNavigator";
//import {AppTabNavigator} from "./components/AppTabNavigator";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    );
  }
}

 const switchNavigator = createSwitchNavigator({
   WelcomeScreen:{screen: WelcomeScreen},
   HomeScreen:{screen: HomeScreen}
//   Drawer: {screen: AppDrawerNavigator},
//   BottomTab: {screen: AppTabNavigator}
 });

 const AppContainer = createAppContainer(switchNavigator);
