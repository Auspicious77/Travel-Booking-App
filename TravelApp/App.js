import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import GeneralStack from './Stacks/GeneralStack';


const App =()=> {
  return(
   <View style={styles.Container}>
     <GeneralStack/>
   </View>
  )
}

export default App

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  }
})