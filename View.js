import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View,TextInput,TouchableWithoutFeedback,Keyboard,multiline,Button,SafeAreaView,ActivityIndicator,FlatList, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListView from "deprecated-react-native-listview"

class ViewDataUsers extends React.Component {
  
  constructor(props) {
   
    super(props)
 
    this.state = {
      isLoding: true
    }       
    }
  
   async componentDidMount(){
    try {
       const response = await fetch('http://192.168.43.233/view.php');
       const json = await response.json();
       let ds = new ListView.DataSource ({ rowHasChanged: (r1, r2) => r1 !== r2 });
       this.setState({
         isLoding: false,
         dataSource: ds.cloneWithRows(json)
       }, function () { });
     } catch (error) {
       console.error(error);
     }
  };
   
  Action_Click(ExtraChargeID,Type,Amount,Description,OrderID,ServicePersonID){
   this.props.navigation.navigate('Full',{
    extraChargeID: ExtraChargeID,
    type: Type,
    amount: Amount,
    description: Description,
    orderID: OrderID,
    servicePersonID: ServicePersonID
   })
   
  }
 
  ListViewItemSeparator = () => {
    return(
      <View>style = {{height:.5, width: '100%'}}</View>
    )

  }
  render() {
    if(this.state.isLoding){
      return(
        <View style={{flex:1,paddingtop:20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View>
        <View>
      <Button 
       color='#233554'
       title="View"
        />
      </View>
      <View>
        <ListView
        dataSource = {this.state.dataSource}
        renderSeparator = {this.state.ListViewItemSeparator}
        renderRow = {(rowData) =>
         <Text style = {styles.rowViewContainer} onPress = {this.Action_Click.bind(this,
          rowData.ExtraChargeID,
          rowData.Type,
          rowData.Amount,
          rowData.Description,
          rowData.OrderID,
          rowData.ServicePersonID
          
    )}>
           {rowData.OrderID}
          

         </Text>
         }  
    
        />
      </View>
      </View>
    )
        }
      }
       
 const styles = StyleSheet.create({
   
  rowViewContainer :{
         
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10
        }
        
      });
             



export default ViewDataUsers;