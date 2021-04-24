import MapView,{Marker,AnimatedRegion,Polyline,PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, { useState, useRef,Component } from 'react';
import {View, StyleSheet, Dimensions, Text,Button, TouchableOpacity, Platform, PermissionsAndroid} from 'react-native';
import getDirections from 'react-native-google-maps-directions'
//import { TouchableOpacity } from 'react-native-gesture-handler';


//need to implement vehicles live locations in home screen

const  MapScreen=({navigation})=>{
  

    const [state,setState] = useState({
       pickupCords: {
         latitude: 7.689093708700577,
         longitude: 80.66242013748847,
         latitudeDelta: 7.0,
         longitudeDelta: 7.0
       },
       droplocationCors: {
        latitude: 7.296757483163562, 
        longitude: 80.64071511408326,
        latitudeDelta: 7.0,
       longitudeDelta: 7.0
       }
})
 
const mapRef = useRef()

const { pickupCords, droplocationCors } = state
const onPressLocation = () => {
  navigation.navigate('ChooseLocation', { getCordinates: fetchValues })

}

const fetchValues = (data) => {
  setState({
    pickupCords: {
      latitude: data.pickupCords.latitude,
      longitude: data.pickupCords.longitude,
    },
    droplocationCors: {
      latitude: data.droplocationCors.latitude,
      longitude: data.droplocationCors.longitude,
    }
  })
   console.log("data===>>>",data)
}
const GOOGLE_MAPS_APIKEY = 'AIzaSyA_ZCW5pbbJYbPRQrEtbdDkGLHfUx0K5sY';



    return(

        <View style={styles.container}>
          <View style={{flex: 1}}>
            <MapView 
            ref={mapRef}
            style={styles.map}
                     initialRegion={pickupCords}
            >
              
                    <Marker
                        
                        coordinate={pickupCords}
                        // title={"title"}
                        // description={"description"}
                    />
                    <Marker
                        
                        coordinate={droplocationCors}
                        // title={"title"}
                        // description={"description"}
                    />
                   
               
  <MapViewDirections
    origin={pickupCords}
    destination={droplocationCors}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor='red'
    timePrecision = 'none'
    mode = 'DRIVING'
    optimizeWaypoints={true}
    onReady={result => {
       mapRef.current.fitToCoordinates(result.coordinates,{
         edgePadding:{
           right: 30,
           bottom: 300,
           left: 30,
           top: 100
         },
         animated: true
       });
    }}
     onError={(errorMessage) => {

     }}
  />
</MapView>
</View>
<View Style={styles.bottomCard}>
  <Text>Where are you going.....?</Text>
  <Button
             title="Choose Your Location"
             color='#233554'
               onPress={onPressLocation}
                
              />
</View>

</View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    bottomCard: {
      backgroundColor: 'white',
      width: 30,
      borderTopEndRadius: 24,
      borderTopStartRadius: 24
    },
    inputStyle: {
      backgroundColor: 'white',
      borderRadius: 4,
      borderWidth: 1,
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      marginTop: 16
    }
});






export default MapScreen;