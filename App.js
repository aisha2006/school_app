import React from 'react';
import {  View } from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {AppDrawerNavigator} from "./components/AppDrawerNavigator";
import SideBarMenu from "./components/SideBarMenu";
import MyHeader from "./components/MyHeader";
//teacher screens
import TeacherHomeScreen from "./TeacherScreens/TeacherHomeScreen";
import GiveAssignmentsScreen from "./TeacherScreens/GiveAssignmentsScreen"
import GiveProgressScreen from "./TeacherScreens/GiveProgressScreen";
import GiveNotificationScreen from "./TeacherScreens/GiveNotificationScreen";
import GiveAttendanceScreen from "./TeacherScreens/GiveAttendanceScreen";
//student screens
import HomeScreen from "./screens/HomeScreen"
import AssignmentsScreen from "./screens/AssignmentsScreens";
import AttendanceScreen from "./screens/AttendanceScreen";
import ProgressScreen from "./screens/ProgressScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import SettingsScreen from "./screens/SettingsScreen";
//forms
import NotificationForm from "./Forms/NotificationForm";
import ProgressForm from "./Forms/ProgressForm";
import HomeworkForm from "./Forms/HomeworkForm";
//details
import getAssignmentsDetails from "./Details/GetAssignmentDetails"
import GetProgressDetails from "./Details/GetProgressDetails";
import GetNotificationDetails from "./Details/GetNotificationDetails"

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
   //students screens
   HomeScreen:{screen: HomeScreen},
   Assignments:{screen:AssignmentsScreen},
   Progress:{screen:ProgressScreen},
   Notifications: {screen: NotificationsScreen},
   SettingsScreen: {screen: SettingsScreen},
   AttendanceScreen: {screen: AttendanceScreen},
   //teacher screens
   TeacherHomeScreen:{screen:TeacherHomeScreen},
   GiveAssignments:{screen:GiveAssignmentsScreen},
   GiveNotification:{screen:GiveNotificationScreen},
   GiveProgress:{screen:GiveProgressScreen},
   GiveAttendance:{screen:GiveAttendanceScreen},
   //forms
   HomeworkForm:{screen:HomeworkForm},
   ProgressForm:{screen:ProgressForm},
   NotificationForm:{screen:NotificationForm},
   //details
   getAssignmentsDetails:{screen:getAssignmentsDetails},
   AppDrawer: {screen: AppDrawerNavigator},
   SideBarMenu:{screen:SideBarMenu},
 });

 const AppContainer = createAppContainer(switchNavigator);
