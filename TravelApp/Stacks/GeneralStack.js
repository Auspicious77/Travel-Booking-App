import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'


// screens
import Onboarding from '../screens/Onboarding'
import Destination from '../screens/Destination';
import { COLORS, SIZES } from '../Constants';
import { icons, images } from '../Constants';
import Beach from '../screens/Beach';
import FrozenHill from '../screens/FrozenHill';
import ClimbingHills from '../screens/ClimbingHills';
import Search from '../screens/Search';
import Bookmark from '../screens/Bookmark';


// tabs
import Tabs from '../navigation/Tabs';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  }
}

const stack = createStackNavigator();

const GeneralStack =()=> {
  return(
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen
          name= "Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white
            },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity
              style={{marginRight: SIZES.padding }}
              onPress={() => console.log("Pressed")} >
              <Image 
                source={icons.menu}
                resizeMode="contain"
                style={{height:25, width: 25}}
              />
              </TouchableOpacity>
            )
          }}
        />

      <stack.Screen 
        name="Tabs"
        component={Tabs}
        options={{
          title: null,
          headerStyle: {
            backgroundColor: COLORS.white
          },
          
          headerLeft:({onPress}) => (
            <TouchableOpacity style={{marginLeft: SIZES.padding}} 
            onPress={onPress}> 
              <Image source={icons.BackIcon} resizeMode="contain" 
                style={{height:25, width: 25}}
              />
             </TouchableOpacity>
          ),
          headerRight:() => (
            <TouchableOpacity style={{marginRight: SIZES.padding}} 
            onPress={() => console.log("menu Pressed")}> 

              <Image source={icons.menu} resizeMode="contain" 
                style={{height:25, width: 25}}
              />
             </TouchableOpacity>
          )
        }}
        />
      
      <stack.Screen
          name='Destination'
          component={Destination}
          options={{
              headerShown: false
          }}
      />
       <stack.Screen
          name='ClimbingHills'
          component={ClimbingHills}
          options={{
              headerShown: false
          }}
      />
       <stack.Screen
          name='Beach'
          component={Beach}
          options={{
              headerShown: false
          }}
      />
       <stack.Screen
          name='FrozenHill'
          component={FrozenHill}
          options={{
              headerShown: false
          }}
      />

     <stack.Screen
          name='Search'
          component={Search}
          options={{
              headerShown: false
          }}
      />

         <stack.Screen
          name='Bookmark'
          component={Bookmark}
          options={{
              headerShown: false
          }}
      />    

     
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default GeneralStack

