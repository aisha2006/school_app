import React from 'react';
import {  View } from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
// import {AppDrawerNavigator} from "./components/AppDrawerNavigator";
import SideBarMenu from "./components/SideBarMenu";
import MyHeader from "./components/MyHeader";
//teacher screens
import TeacherHomeScreen from "./TeacherScreens/TeacherHomeScreen";
import GiveAssignmentsScreen from "./TeacherScreens/GiveAssignmentsScreen"
import GiveProgressScreen from "./TeacherScreens/GiveProgressScreen";
import GiveNotificationScreen from "./TeacherScreens/GiveNotificationScreen";
import GiveAttendanceScreen from "./TeacherScreens/GiveAttendanceScreen";
import TeacherProfile from "./TeacherScreens/TeacherProfile";
import TeacherLoginScreen from "./TeacherScreens/TeacherLoginScreen";
//student screens
import HomeScreen from "./screens/HomeScreen"
import AssignmentsScreen from "./screens/AssignmentsScreens";
import AttendanceScreen from "./screens/AttendanceScreen";
import ProgressScreen from "./screens/ProgressScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AboutPage from "./screens/AboutPage";
import StudentLoginScreen from "./screens/StudentLoginScreen";
//school screens
import GiveSchoolNotifications from "./schoolScreens/GiveSchoolNotifications";
import SchoolHomeScreen from "./schoolScreens/SchoolHomeScreen";
import CreateStudentAccount from "./schoolScreens/CreateStudentAccount";
import CreateTeacherAccount from "./schoolScreens/CreateTeacherAccount"
import SchoolLoginScreen from "./schoolScreens/SchoolLoginScreen";
import EditAboutPage from "./schoolScreens/EditAboutPage";
import SchoolSideBar from "./components/SchoolSideBar";
import CreateSchoolAccount from "./schoolScreens/CreateSchoolAccount";
//forms
import NotificationForm from "./Forms/NotificationForm";
import ProgressForm from "./Forms/ProgressForm";
import HomeworkForm from "./Forms/HomeworkForm";
import SchoolNotificationForm from "./Forms/SchoolNotificationForm";
import AboutForm from "./Forms/AboutForm";
//details
import getAssignmentsDetails from "./Details/GetAssignmentDetails"
import GetProgressDetails from "./Details/GetProgressDetails";
import GetNotificationDetails from "./Details/GetNotificationDetails"
//extra
import {Icon} from "react-native-elements"

export default class App extends React.Component {
  render(){
    return(
      <View style={{backgroundColor:"#1ef5fc"}}>
        <AppContainer/>
      </View>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : HomeScreen,
    navigationOptions: {
      drawerIcon: <Icon name = "home" type = "font-awesome"/>,
      drawerLabel: "HomeScreen",
    }}
  },
  {
    contentComponent:SideBarMenu
  },
  {
    initialRouteName : 'Home'
  })

 const switchNavigator = createSwitchNavigator({
   WelcomeScreen:{screen: WelcomeScreen},
   //students screens
   HomeScreen:{screen: HomeScreen},
   Assignments:{screen:AssignmentsScreen},
   Progress:{screen:ProgressScreen},
   Notifications: {screen: NotificationsScreen},
   SettingsScreen: {screen: SettingsScreen},
   AttendanceScreen: {screen: AttendanceScreen},
   About: {screen:AboutPage},
   StudentLoginScreen:{screen:StudentLoginScreen},
   //teacher screens
   TeacherHomeScreen:{screen:TeacherHomeScreen},
   GiveAssignments:{screen:GiveAssignmentsScreen},
   GiveNotification:{screen:GiveNotificationScreen},
   GiveProgress:{screen:GiveProgressScreen},
   GiveAttendance:{screen:GiveAttendanceScreen},
   TeacherProfile:{screen:TeacherProfile},
   TeacherLoginScreen:{screen:TeacherLoginScreen},
   //school screens
   SchoolLoginScreen:{screen:SchoolLoginScreen},
   GiveSchoolNotifications:{screen:GiveSchoolNotifications},
   SchoolHomeScreen:{screen:SchoolHomeScreen},
   CreateStudentAccount:{screen:CreateStudentAccount},
   CreateTeacherAccount:{screen:CreateTeacherAccount},
   CreateSchoolAccount:{screen:CreateSchoolAccount},
   EditAboutPage:{screen:EditAboutPage},
   SchoolSideBar:{screen:SchoolSideBar},
   //forms
   HomeworkForm:{screen:HomeworkForm},
   ProgressForm:{screen:ProgressForm},
   NotificationForm:{screen:NotificationForm},
   SchoolNotificationForm:{screen:SchoolNotificationForm},
   AboutSchoolForm:{screen:AboutForm},
   //details
   GetAssignmentsDetails:{screen:getAssignmentsDetails},
   GetProgressDetails:{screen:GetProgressDetails},
   GetNotificationDetails:{screen:GetNotificationDetails},
   //extra
   AppDrawer: AppDrawerNavigator,
   SideBarMenu:{screen:SideBarMenu},
 });

 const AppContainer = createAppContainer(switchNavigator);
