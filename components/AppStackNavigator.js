import React from 'react';
import {  View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "../screen/HomeScreen"
import {AppDrawerNavigator} from "./AppDrawerNavigator";


export const AppStackNavigator = createStackNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions: {
            headerShown: false
        }    
    },
    Drawer:{screen:AppDrawerNavigator,
    navigationOptions:{
        headerShown:false
    }
}
    
},
{
    contentComponent:SideBarMenu
},
{
    initialRouteName:"Home"
})