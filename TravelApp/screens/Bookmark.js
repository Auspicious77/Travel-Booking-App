import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLORS, FONTS, SIZES } from '../Constants'




export default function Bookmark({navigation}) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  
   useEffect(() => {
     getData()

    }, []);
   

   const getData =()=>{
     try {
       AsyncStorage.getItem('UserData')
       .then(value=>{
         if (value != null) {
           let User = JSON.parse(value);
           setName(User.Name)
           setAge(User.Age)

         }
       })
     } catch (error) {
       console.log(error)
     }
   }

   
   const updateData = async()=>{
    if (name==0) {
      Alert.alert('You must enter you name')
      
    }
    else{
      try {
        await AsyncStorage.setItem('UserData', name);
        Alert.alert('Success!', 'You have sucessfully updated your data')
      } catch (error) {
        console.log(error)
      }

    }
  }

  const removeData = async()=>{
   
      try {
        await AsyncStorage.removeItem('UserData');
        navigation.navigate('Search')
      } catch (error) {
        console.log(error)
      }

  
  }


  return (
    <View style={styles.Body}>
      <Text>Bookmark</Text>
      <Text style={{...FONTS.h2, color: COLORS.primary, }}>Welcome {name}!</Text>
      <Text style={{...FONTS.h2, color: COLORS.primary, }}>Your Age is {age}</Text>
      
      <TextInput
        placeholder='Enter your name'
        style={styles.input}
        value={name}
        onChangeText={(value)=>setName(value)}
      />
      <View>
        <TouchableOpacity style={styles.Btn} onPress={updateData}>
        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Update </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Btn1} onPress={removeData}>
        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Remove</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    textAlign: 'center',
    width: 300,
    marginTop: 130,
    marginBottom: 25
  },
  Btn: {
    backgroundColor: 'orange',
    height: 50,
    width: 200, 
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  Btn1: {
    backgroundColor: 'red',
    height: 50,
    width: 200, 
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  }

})