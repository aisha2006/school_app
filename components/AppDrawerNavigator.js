import React from 'react';
import {  View } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AssignmentsScreen from "../screens/AssignmentsScreens";
import AttendanceScreen from "../screen/AttendanceScreen"
import ProgressScreen from "../screen/ProgressScreen"
import SettingsScreen from "../screen/SettingsScreen"
import SideBarMenu from "./SideBarMenu";
import HomeScreen from "../screen/HomeScreen"
import NotificationsScreen from "../screen/NotificationsScreen"




export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:HomeScreen},
    Assignments:{screen:AssignmentsScreen},
    Attendance:{screen:AttendanceScreen},
    Progress:{screen:ProgressScreen},
    Notifications: {screen: NotificationsScreen},
    Settings:{screen:SettingsScreen},
},
{
    contentComponent:SideBarMenu
},
{
    initialRouteName:"Home"
})