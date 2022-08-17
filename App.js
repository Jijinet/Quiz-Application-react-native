
import {StyleSheet} from 'react-native';
import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';

const Stack = createStackNavigator();


export default function App() {


  return (
      <NavigationContainer>
        <Stack.Navigator>
          
            <Stack.Screen
              options={{headerShown: false}}
              name="Home"
              component={Home}
            />
                
        </Stack.Navigator>
      </NavigationContainer>
  );
  
}

