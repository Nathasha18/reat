import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View,TextInput,TouchableWithoutFeedback,Keyboard,multiline,Button,AppRegistry,Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class ExtraChargeDetaillsScreen extends Component {
 
  constructor(props) {
   
      super(props)
   
      this.state = {
   
        TextInputType: '',
        TextInputAmount: '',
        TextInputDescriptione: '',
        TextInputOrderID: '',
        TextInputServicePersonID: ''
   
      }
   
    }
   
    InsertDataToServer = () =>{
   
     
      const { TextInputType }  = this.state ;
      const { TextInputAmount }  = this.state ;
      const { TextInputDescription }  = this.state ;
      const { TextInputOrderID }  = this.state ;
      const { TextInputServicePersonID }  = this.state ;
          
   if(TextInputType.length==0 || TextInputAmount.length==0 || TextInputDescription.length==0 || TextInputOrderID.length==0 || TextInputServicePersonID.length==0 )
   {
     alert("required field is Missing");
   }else{
   
  fetch('http://192.168.43.233/extra2.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
      type: TextInputType ,
   
      amount: TextInputAmount,
   
      description: TextInputDescription,

      orderID: TextInputOrderID ,

      servicePersonID: TextInputServicePersonID ,
   
    })
   
  }).then((response) => response.json())
        .then((responseJson) => {
   
  // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);
   
        }).catch((error) => {
          console.error(error);
        });
   
   
    }}
   
    render() {
      return (
   
  <View style={styles.MainContainer}>
    <ScrollView>
     <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
    <View style={{  marginTop: 20,padding:3}} >
   <Text> Enter Extra Charge Type</Text>
          <TextInput
            
            // Adding hint in Text Input using Place holder.
         
            placeholder='Type'
            onChangeText={TextInputType => this.setState({TextInputType})}
   
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
   
            style={styles.inputs} 
          
          />
   </View>
   </TouchableWithoutFeedback>
   <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
    <View style={{  marginTop: 20,padding:3}} >
   <Text> Add Amount</Text>
          <TextInput
            
            // Adding hint in Text Input using Place holder.
            keyboardType="numeric"
            placeholder='Amount'
            onChangeText={TextInputAmount => this.setState({TextInputAmount})}
   
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
   
            style={styles.inputs} 
          
          />
   </View>
   </TouchableWithoutFeedback>
   <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
    <View style={{  marginTop: 20,padding:3}} >
   <Text>Add Description</Text>
          <TextInput
            
            // Adding hint in Text Input using Place holder.
         
            placeholder='Description'
            onChangeText={TextInputDescription => this.setState({TextInputDescription})}
   
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
            multiline={multiline || true}
            style={styles.inputs} 
          
          />
   </View>
   </TouchableWithoutFeedback>
   <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
    <View style={{  marginTop: 20,padding:3}} >
   <Text>Add OrderId</Text>
          <TextInput
            
            // Adding hint in Text Input using Place holder.
            keyboardType="numeric"
            placeholder='Description'
            onChangeText={TextInputOrderID => this.setState({TextInputOrderID})}
   
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
   
            style={styles.inputs} 
          
          />
   </View>
   </TouchableWithoutFeedback>
   <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
    <View style={{  marginTop: 20,padding:3}} >
   <Text>Add ServicePersonID</Text>
          <TextInput
            
            // Adding hint in Text Input using Place holder.
            keyboardType="numeric"
            placeholder='ServicePersonID'
            onChangeText={TextInputServicePersonID => this.setState({TextInputServicePersonID})}
   
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
   
            style={styles.inputs} 
          
          />
   </View>
   </TouchableWithoutFeedback>
          

   <View style={styles.fixToText}>
          <Button title="Submit"
          color="#233554"
           onPress={this.InsertDataToServer}  />
        
    
        
       
       <Button 
        color='#233554'
        title="View"
        onPress={() =>
          this.props.navigation.navigate('Testing')
        }
      />
       </View>
      
       </ScrollView>
  </View>
  
              
      );
    }
  }
   
  const styles = StyleSheet.create({
   
  MainContainer :{
   
  justifyContent: 'center',
  flex:1,
  margin: 10
  },
   
  TextInputStyleClass: {
   
  textAlign: 'center',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  // Set border Hex Color Code Here.
   borderColor: '#FF5722',
   
  // Set border Radius.
   //borderRadius: 10 ,
  },
  inputs: {
    
    marginTop: 5,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: "#233554",
    borderRadius: 6,
   // backgroundColor: "#61dafb",
    color: "#233554",
    paddingHorizontal: 4,
   
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
 },
 fixToText: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding:3,
 
  
},
   
  });
  
  AppRegistry.registerComponent('ExtraChargeDetaillsScreen', () => ExtraChargeDetaillsScreen);
  export default ExtraChargeDetaillsScreen;