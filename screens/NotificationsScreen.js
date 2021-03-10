import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class NotificationsScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Notifications Screen</Text>
                <TouchableOpacity style={{marginRight:1200}} 
                onPress={()=>{this.props.navigation.navigate("HomeScreen")}}>
                        <Text>
                            back
                        </Text>
                    </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        margin:"center",
        flex: 1,
        backgroundColor: '#1ef5fc',
        alignItems: 'center',
        justifyContent: 'center',
      },
          title: {
            fontSize: 65,
            fontWeight: "300",
            paddingBottom: 30,
            color: "white",
            
          },
});