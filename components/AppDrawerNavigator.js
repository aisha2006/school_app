import React from 'react';
import {  View } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AssignmentsScreen from "../screens/AssignmentsScreens";
import AttendanceScreen from "../screens/AttendanceScreen"
import ProgressScreen from "../screens/ProgressScreen"
import SettingsScreen from "../screens/SettingsScreen"
import SideBarMenu from "./SideBarMenu";
import HomeScreen from "../screens/HomeScreen"
import NotificationsScreen from "../screens/NotificationsScreen"

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