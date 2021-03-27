import React from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View} from 'react-native';
import db from '../config'
import firebase from 'firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class MyHeader extends React.Component{

  BellIcon=()=>{
    return(
      <View>
       
      </View>
    )
  }

  render(){
    return(
      <SafeAreaProvider>
        <Header
          leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => this.props.navigation.toggleDrawer()}/>}
          centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
          rightComponent={ <Icon name='bell' type='font-awesome' color='#696969' size={25}
          onPress={()=>{this.props.navigation.navigate('Progress')}}/>}
          containerStyle = {{backgroundColor:"#eaf8fe",width:1230,marginBottom:25}}
        />
      </SafeAreaProvider>
        

)
}

}
