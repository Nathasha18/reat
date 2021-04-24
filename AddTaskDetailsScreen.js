import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState}  from 'react';
import {Picker} from '@react-native-picker/picker';
import { StyleSheet, Text, View,TextInput,TouchableWithoutFeedback,Keyboard,multiline,Button,SafeAreaView,date,AppRegistry } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InputScrollView from 'react-native-input-scroll-view';

import DatePicker from "@dietime/react-native-date-picker";



class AddTaskDetailsScreen extends React.Component{

 
 // const [selectedValue, setSelectedValue] = useState("");
 //const [date, setDate] = useState();

 
render(){
  return (
    
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
      }}>
         <View>
        <ScrollView>
    
           <View style={{  marginTop:5,padding:3}} >
           <Text>Enter status</Text>
                <TextInput
                     style={styles.inputs} 
                     placeholder='status'
                   
   
        // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
    />  
          </View>

          <View style={{  marginTop: 10,padding:3}} >
          <Text>Enter Due Date</Text>
                <TextInput
                     style={styles.inputs} 
                     placeholder='Due Date'
                   
   
        // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
    />
         </View>

        <View style={{  marginTop: 10,padding:3}} >
        <Text>Add Description</Text>
              <TextInput
                  style={styles.inputs} 
                  placeholder='Description'
                  multiline={multiline || true}
                 
 
      // Making the Under line Transparent.
                   underlineColorAndroid='transparent'
               />
        </View>

        <View>
        <Text>Enter Service Person ID</Text>
               <TextInput
                style={styles.inputs} 
                placeholder='Service Person Id'
        // Making the Under line Transparent.
                underlineColorAndroid='transparent'
       />
       </View>
    
       <View style={{  marginTop:5,padding:3}} >
        <Text>Enter Added By</Text>
                <TextInput
                style={styles.inputs} 
                placeholder='Added BY'
               
   
        // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                 />
       </View>
   
    <View style={{width:100, height:30,marginVertical:15,padding:3}}>
              <Button 
        color='#233554'
        title="Submit"
       
      />
                    </View>
    </ScrollView>
    
    </View>
    </TouchableWithoutFeedback>
    
  );
}}

   const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingTop: 40,
    alignItems: "center",
   
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
 Picker: {
    
    marginTop: 10,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: "#233554",
    borderRadius: 6,
   // backgroundColor: "#61dafb",
    color: "#233554",
    paddingHorizontal: 4,
   
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,},
 
 
containers: {
  flex: 1,
 

},
title: {
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  padding: 20,
},
datePickerStyle: {
  width: 200,
  marginTop: 20,

},

});

AppRegistry.registerComponent(' AddTaskDetailsScreen', () =>  AddTaskDetailsScreen);
export default AddTaskDetailsScreen;
     
      


      
  




 

  