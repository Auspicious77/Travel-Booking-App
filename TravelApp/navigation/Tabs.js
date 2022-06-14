import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Image} from 'react-native';
import Home from '../screens/Home';
import { COLORS, icons } from '../Constants';
import Account from '../screens/Account';
import Bookmark from '../screens/Bookmark';
import Search from '../screens/Search'
import { NavigationContainer } from '@react-navigation/native';


const tab = createBottomTabNavigator();

const tabOptions = {
    
   showLabel: false,
    style: {
        height: 90,
        color: '#000',
        shadowOffset:{
              width: 0,
              height: 10
        },
        shadowOpacity: 0.58,
        shadowRadius: 13.97,

        elevation: 21
    }
}

const Tabs = () =>{
    return(
        <tab.Navigator tabBarOptions={tabOptions} 
       screenOptions={({route}) => ({
           tabBarIcon: ({focused}) => { 
               const tintColor = focused ? COLORS.primary : COLORS.gray;


               switch (route.name) {
                   case "Home" : 
                   return(
                       <Image source={icons.home} 
                           resizeMode="contain"
                           style={{
                               height: 30, width: 30,
                               tintColor: tintColor
                            }}
                       />
                   )


                   case "Search" : 
                   return(
                       <Image source={icons.search} 
                           resizeMode="contain"
                           style={{
                               height: 30, width: 30, tintColor: tintColor
                            }}
                       />
                   )

                   case "Bookmark" : 
                   return(
                       <Image source={icons.Bookmark} 
                           resizeMode="contain"
                           style={{
                               height: 30, width: 30, tintColor: tintColor
                            }}
                       />
                   )

                   case "Account" : 
                   return(
                       <Image source={icons.person} 
                           resizeMode="contain"
                           style={{
                               height: 30, width: 30, tintColor: tintColor
                            }}
                       />
                   )
               }
           }
       })}>
            <tab.Screen 
                name="Home"
                component={Home  }
                options={{
                    headerShown: false,
                }}
            />

            <tab.Screen 
                name= "Search"
                component={Search}
                options={{
                    headerShown: false,
                }}
            />
            <tab.Screen 
                name= "Bookmark"
                component={Bookmark}
                options={{
                    headerShown: false,
                }}
            />
            <tab.Screen 
                name= "Account"
                component={Account}
                options={{
                    headerShown: false,
                }}
            />

        </tab.Navigator>
        

    )
}

export default Tabs