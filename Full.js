import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableWithoutFeedback,Keyboard,multiline,Button,SafeAreaView,ActivityIndicator, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class FullScreen extends React.Component {
 
  constructor(props){
     super(props);
     this.setParams = {
         TextInputId: '',
         TextInputType: '',
         TextInputAmount: '',
         TextInputDescriptione: '',
         TextInputOrderID: '',
         TextInputServicePersonID: ''
     }
 }
 componentDidMount(){
 
     this.setState({
        TextInputId: this.props.navigation.state.params.extraChargeID,
        TextInputType: this.props.navigation.state.params.amount,
        TextInputAmount: this.props.navigation.state.params. description,
        TextInputDescriptione: this.props.navigation.state.params.extraChargeID,
        TextInputOrderID: this.props.navigation.state.params.orderID,
        TextInputServicePersonID: this.props.navigation.state.params.servicePersonID, 
         
         }  
       )
     
    
  };
  
 UpdateDetails = () =>{

 }
 DeleteDetails = () =>{
     
}
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
         value = {this.setParams.TextInputType}
           placeholder='Type'
             onChangeText={TextInputType => this.setState({TextInputType})}
              underlineColorAndroid='transparent'
                style={styles.inputs}    />
                 </View>
                  </TouchableWithoutFeedback>

 <TouchableWithoutFeedback onPress={() => {
   Keyboard.dismiss();
   console.log('dismissed');
 }}>
 <View style={{  marginTop: 20,padding:3}} >
  <Text> Add Amount</Text>
   <TextInput
      value = {this.setParams.TextInputAmount}
         placeholder='Amount'
            onChangeText={TextInputAmount => this.setState({TextInputAmount})}
              underlineColorAndroid='transparent'
                style={styles.inputs}  />
                  </View>
                     </TouchableWithoutFeedback>

<TouchableWithoutFeedback onPress={() => {
 Keyboard.dismiss();
 console.log('dismissed');
  }}>
<View style={{  marginTop: 20,padding:3}} >
  <Text>Add Description</Text>
       <TextInput
         value = {this.setParams.TextInputDescription}
            placeholder='Description'
               onChangeText={TextInputDescription => this.setState({TextInputDescription})}
                   underlineColorAndroid='transparent'
                      multiline={multiline || true}
                        style={styles.inputs} />
                         </View>
                           </TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={() => {
  Keyboard.dismiss();
  console.log('dismissed');
}}>
<View style={{  marginTop: 20,padding:3}} >
  <Text>Add OrderId</Text>
    <TextInput
      value = {this.setParams.TextInputOrderID}
         placeholder='Description'
            onChangeText={TextInputOrderID => this.setState({TextInputOrderID})}
              underlineColorAndroid='transparent'
                style={styles.inputs}  />
                 </View>
                   </TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={() => {
Keyboard.dismiss();
console.log('dismissed');
}}>
   <View style={{  marginTop: 20,padding:3}} >
     <Text>Add ServicePersonID</Text>
        <TextInput
             value = {this.setParams.TextInputServicePersonID}
               placeholder='ServicePersonID'
                 onChangeText={TextInputServicePersonID => this.setState({TextInputServicePersonID})}
                    underlineColorAndroid='transparent'
                      style={styles.inputs} />
                       </View>
                         </TouchableWithoutFeedback>
                  
<View style={{ width:100, height:30,marginVertical:15,padding:3}}>
  <Button title="UPDATE"
    color="#233554"
    onPress={this.UpdateDetails}/>
      </View>   
   <View>
    <Button 
      color="red"
      title="DELETE"
      onPress={this.DeleteDetails} 
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
    borderColor: '#FF5722',
 },
inputs: {
    marginTop: 5,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: "#233554",
    borderRadius: 6,
    color: "#233554",
    paddingHorizontal: 4,
    fontSize: 15,
    fontWeight: "bold",
     marginBottom: 10,
},
           
});
                
      
export default FullScreen;