import * as React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image,TextInput } from 'react-native';
import bg from './assets/bg.jpeg';
import logo from './assets/logo.jpeg';

class LoginScreen extends React.Component {
  render() {
    return (
        < ImageBackground source={bg} 
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{width:130, height: 90, alignItems: 'center'}} source={logo}/>
          <Text style={{marginVertical:20, fontSize:18, color:'white'}}>WELLCOME TO CRM</Text>

          <TextInput style={{width:200, height:30, borderColor: 'gray',borderRadius:25, backgroundColor:'rgba(140, 114, 114, 0.3)',paddingHorizontal:16, marginVertical:15 }}
           underlineColorAndroid='rgba(0,0,0,0)'
           placeholder="Enter your ID"/>

           
         <TextInput style={{width:200, height:30, borderColor: 'gray',borderRadius:25, backgroundColor:'rgba(140, 114, 114, 0.3)',paddingHorizontal:16, marginVertical:15 }}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder ="Enter your password"/>
  
        
            <Button
             title="Login"
             color='#233554'
               onPress={() =>
                this.props.navigation.navigate('Details')
              }
              />
            </ImageBackground>
    );
  }
}



export default LoginScreen;