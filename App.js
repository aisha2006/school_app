import React from 'react';
import {  View } from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen"
import HomeScreen from "./screens/HomeScreen"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AssignmentsScreen from "./screens/AssignmentsScreens";
import ProgressScreen from "./screens/ProgressScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import TeacherHomeScreen from "./TeacherScreens/TeacherHomeScreen";
import GiveAssignmentsScreen from "./TeacherScreens/GiveAssignmentsScreen"
import HomeworkForm from "./Forms/HomeworkForm";
import getAssignmentsDetails from "./Details/GetAssignmentDetails"
import GiveProgressScreen from "./TeacherScreens/GiveProgressScreen";
import ProgressForm from "./Forms/ProgressForm";
import GiveNotificationScreen from "./TeacherScreens/GiveNotificationScreen";
import NotificationForm from "./Forms/NotificationForm";
import SettingsScreen from "./screens/SettingsScreen";
import {AppDrawerNavigator} from "./components/AppDrawerNavigator";
import GiveAttendanceScreen from "./TeacherScreens/GiveAttendanceScreen";

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
   ProgressForm:{screen:ProgressForm},
   GiveNotification:{screen:GiveNotificationScreen},
   NotificationForm:{screen:NotificationForm},
   SettingsScreen: {screen: SettingsScreen},
   Drawer: AppDrawerNavigator,
   GiveAttendance:{screen:GiveAttendanceScreen}
 // AssignmentsDetails:{screen:getAssignmentsDetails}
 
//   BottomTab: {screen: AppTabNavigator}
 });

 const AppContainer = createAppContainer(switchNavigator);
