import { View, Text, Image, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../Constants'
import { images, icon } from '../Constants'
import LinearGradient from 'react-native-linear-gradient'

const Onboarding = ({navigation}) => {
function Submit(){navigation.push("Tabs")}
  return (
    <SafeAreaView style={styles.container}>
    <View style={{
      flex:1, alignItems:'center', justifyContent: 'center'
    }}>
     <Image source={images.Travel3}
       resizeMode='contain'
       style={{
         width: '100%', height: '100%'
       }}
     />
    </View>
    <View style={{
      flex:1, alignItems:'center', justifyContent: 'center'
    }}>
     <View style = {{alignItems: 'center', marginHorizontal: SIZES.padding}}>
     <Text style={{...FONTS.h1, color: COLORS.black}}>Digital Ticket</Text>
     <Text style={{color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center', ...FONTS.h3}}>
     Easy solution to buy tickets for your travel, business trips, transportation, logging and culnary</Text>
     </View>

     <TouchableOpacity style={[styles.Shadow, {marginTop: SIZES.padding * 2, width: '70%', height: 50, 
     justifyContent: 'center', alignItems: 'center' }]}
     onPress={Submit}>
    <LinearGradient style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
    colors={['#46aeff', '#5884ff']}
    start={{x:0, y:0}} 
    end={{x:1, y:1}} >
    <Text style={{color: COLORS.white, ...FONTS.h3}}>Start !</Text>
    </LinearGradient>
     </TouchableOpacity>
    </View>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  Shadow: {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 0
  },
  shadowOpacity: 0.25,
  elevation: 5,
  shadowRadius: 0.84
  }
})

export default Onboarding

