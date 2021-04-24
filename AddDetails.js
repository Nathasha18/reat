import * as React from 'react';
import { StyleSheet, Text, View, Button,ImageBackground, Image, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import bg from './assets/bg.jpeg';
import logo from './assets/logo.jpeg';

class AddDetailsScreen extends React.Component {
  render() {
    return (
         < ImageBackground source={bg} 
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{width:150, height: 90, alignItems: 'center',marginVertical:50 }} source={logo}/>
              <View style={{ flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',}}>
                    <View style={{flex: 1,width:200, height:30,}}>
                
                    </View>
                    <View>
                      <ScrollView>
                    <View style={{flex: 0.5,width:200, height:30,marginVertical:20}}>
                    <Button 
                     color='#233554'
              
              title="Task Details"
              onPress={() =>
                this.props.navigation.navigate('AddTaskDetails')}
            
            />
                    </View>
                    <View style={{flex: 0.5,width:200, height:30,marginVertical:50}}>
              <Button 
        color='#233554'
        title="Extra Charges"
        onPress={() =>
          this.props.navigation.navigate('Extra Charges')
        }
      />
                    </View>

                    <View style={{flex: 0.5,width:200, height:30,marginVertical:50}}>
              <Button 
        color='#233554'
        title="Get Call"
        onPress={() =>
          this.props.navigation.navigate('Call')
        }
      />
                    </View>
                 
                   </ScrollView>
                  </View>

                  </View>
              
             
              
            </ImageBackground>
    )
        }
      }
       
     
      


      
  

// ...


 
export default AddDetailsScreen;
  
