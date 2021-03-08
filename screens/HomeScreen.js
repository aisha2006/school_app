import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View>
                    <Header            
                    centerComponent={{text: "Home", 
                    style: {
                        fontSize: 65,
                        fontWeight: "bold",
                        paddingBottom: 30,
                        color: "white"}
                    }}/>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text>
                            Assignments
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                            Progress
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                           My Notfication
                        </Text>
                    </TouchableOpacity>
                </View>
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