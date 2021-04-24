import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import DetailsScreen from './DetailsScreen';
import TasksScreen from './Tasks';
import AddDetailsScreen from './AddDetails';
import AddTaskDetailsScreen from './AddTaskDetailsScreen';
import ExtraChargeDetaillsScreen from './ExtraChargeDetails';
import ViewDataUsers from './View';
import FullScreen from './Full';
import NotesScreen from './Notes';
import CallScreen from './Call';
import MapScreen from './Map';
import Home from './src/Home';
import ChooseLocation from './src/ChooseLocation';
import FlashMessage from "react-native-flash-message";
import { createDrawerNavigator } from '@react-navigation/drawer';
import TaskSearchScreen from './TaskSearch';
import Testing from './Testing';
import ViewNotesScreen from './ViewNotes';
import CallingScreen from './Calling';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (

    <Drawer.Navigator initialRouteName="Details">
      <Drawer.Screen name="Details" component={DetailsScreen} />
      <Drawer.Screen name="Call" component={CallScreen} />
      <Drawer.Screen name="Map" component={MapScreen} />
    </Drawer.Navigator>

  );
}

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />
        <Stack.Screen
          name="Details"
          component={DrawerRoutes}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />
        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />
        <Stack.Screen
          name="AddDetails"
          component={AddDetailsScreen}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />
        <Stack.Screen
          name="AddTaskDetails"
          component={AddTaskDetailsScreen}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />
        <Stack.Screen
          name="Extra Charges"
          component={ExtraChargeDetaillsScreen}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />


        <Stack.Screen
          name="View"
          component={ViewDataUsers}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />
       

        <Stack.Screen
          name="Notes"
          component={NotesScreen}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />


        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />
        <Stack.Screen
          name="ChooseLocation"
          component={ChooseLocation}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />
        <Stack.Screen
          name="TaskSearchScreen"
          component={TaskSearchScreen}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />
        <Stack.Screen
          name="Full"
          component={FullScreen}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />
           <Stack.Screen
          name="Testing"
          component={Testing
          }
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
/>
          <Stack.Screen
          name="ViewNotes"
          component={ViewNotesScreen
          }
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />
        
        <Stack.Screen
          name="calling"
          component={CallingScreen}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>


  );
}

export default App;


