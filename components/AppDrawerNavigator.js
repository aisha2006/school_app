//import React from 'react';
import {  View } from 'react-native';
//import {createDrawerNavigator} from 'react-navigation-drawer';
 import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AttendanceScreen from "../screens/AttendanceScreen";
import ProgressScreen from "../screens/ProgressScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SideBarMenu from "./SideBarMenu";
import HomeScreen from "../screens/HomeScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import AssignmentScreen from '../screens/AssignmentsScreens';
import GetAssignmentDetails from "../Details/GetAssignmentDetails"

export const AppDrawerNavigator = createDrawerNavigator({
  Home1 : {
    screen : HomeScreen,
    },
  AssignmentsScreen : {
    screen : AssignmentScreen
  },
  NotificationsScreen : {
    screen : NotificationsScreen
  },
   AttendanceScreen:{
    screen: AttendanceScreen
  },
  SettingsScreen : {
    screen : SettingsScreen
  },
  ProgressScreen : {
    screen : ProgressScreen
  },
},
  {
    contentComponent:SideBarMenu
  },
  {
    initialRouteName : 'Home1'
  })
