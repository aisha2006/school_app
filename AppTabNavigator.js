import React from 'react';
import {  View } from 'react-native';
import {createBottomTabNavigator} from "react-navigation-tabs"

export const AppTabNavigator = createBottomTabNavigator({
    Subjects:{
        screen: 
        navigationOptions:{
            tabBarLabel: "Subjectcts"
        }
    },
    AssignmentsNotification:{
        screen: 
        navigationOptions:{
            tabBarLabel: "Notifications"
        }
    
        screen: 
        navigationOptions:{
            tabBarLabel: "Notifications"
        }
    }
}) 