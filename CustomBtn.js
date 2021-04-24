import React from 'react';
import { StyleSheet, Text, View, Button,ImageBackground, Image, TextInput,s } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export const CustomBtn = ({ 
    onPress = () => {}
}) => {
 return (
      
          <Button
              onPress={onPress}>
          </Button>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    }
    })

export default CustomBtn;