import React from 'react';
import {  View } from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen"
import HomeScreen from "./screens/HomeScreen"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AssignmentsScreen from "./screens/AssignmentsScreens";
import ProgressScreen from "./screens/ProgressScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import TeacherHomeScreen from "./screens/TeacherHomeScreen";
import GiveAssignmentsScreen from "./screens/GiveAssignmentsScreen"
import HomeworkForm from "./screens/HomeworkForm";
import getAssignmentsDetails from "./screens/GetAssignmentDetails"
import GiveProgressScreen from "./screens/GiveProgressScreen";
import ProgressForm from "./screens/ProgressForm"

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
   HomeScreen:{screen: HomeScreen},
   Assignments:{screen:AssignmentsScreen},
   Progress:{screen:ProgressScreen},
   Notifications: {screen: NotificationsScreen},
   TeacherHomeScreen:{screen:TeacherHomeScreen},
   GiveAssignments:{screen:GiveAssignmentsScreen},
   HomeworkForm:{screen:HomeworkForm},
   GiveProgress:{screen:GiveProgressScreen},
   ProgressForm:{screen:ProgressForm}
 // AssignmentsDetails:{screen:getAssignmentsDetails}
//   Drawer: {screen: AppDrawerNavigator},
//   BottomTab: {screen: AppTabNavigator}
 });

 const AppContainer = createAppContainer(switchNavigator);
