import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView  } from 'react-native'
import React from 'react'
import {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Search({navigation}) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  useEffect(() => {
    getData()

   }, []);
  

  const getData =()=>{
    try {
      AsyncStorage.getItem('UserData')
      .then(value=>{
        if (value!=null) {
          navigation.navigate('Bookmark')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  const setData = async()=>{
    if (name.length==0 || age.length==0) {
      Alert.alert('You must enter you Age')  
    }
    else{
      try {
        var User ={ 
          Name: name,
          Age: age
        } 
        await AsyncStorage.setItem('UserData', JSON.stringify(User));
        navigation.navigate('Bookmark')
      } catch (error) {
        console.log(error)
      }

    }
  }
  return (
    <View style={styles.Body}>
      <Text>Async Storage</Text>
      <TextInput
        placeholder='Enter your name'
        style={styles.input}
        onChangeText={(value)=>setName(value)}
      />

       <TextInput
        placeholder='Enter your Age'
        style={styles.input1}
        onChangeText={(value)=>setAge(value)}
      />
      <View>
      <TouchableOpacity style={styles.Btn} onPress={setData}>
        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Submit</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'

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
  input1:{
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    textAlign: 'center',
    width: 300,
    marginTop: 10,
    marginBottom: 25

  },

  Btn: {
    backgroundColor: 'orange',
    height: 50,
    width: 200, 
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  }
})