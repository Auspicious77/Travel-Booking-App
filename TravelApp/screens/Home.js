import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, SIZES, images, icons, FONTS } from '../Constants'
import {useState} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'



const OptionItem = ({icon, Color, label, onPress}) => {
  return(
    <TouchableOpacity style ={{flex: 1, alignitem: 'center', justifyContent: 'center'}} onPress={onPress}>
      <View style={[styles.shadow, {width: 60, height: 60, }]}>
      <LinearGradient style={{flex:1,  justifyContent: 'center', alignItems: 'center', borderRadius: 15}}
      colors={Color}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>

      <Image source={icon}
        resizeMode='cover'
        style={{tintColor: COLORS.white, height:30, width: 30}}
      />
          
      </LinearGradient>
      </View>
      <Text style={{marginTop: SIZES.base, color: COLORS.gray, ...FONTS.Body3, paddingLeft: SIZES.padding }}>{label}</Text>
    </TouchableOpacity>
  )
}
const Home = ({navigation}) => {
  // Data
  const [destination, setDestination] = React.useState([
    {id: "1",
     name: 'SkillVilla',
     img: images.Skillvilla,
     go: () => navigation.navigate('Destination')
    },

    {id: "2",
    name: 'Climbing Hills',
    img: images.Climbinghills,
    go: () => navigation.navigate('ClimbingHills')

   },

   {id: "3",
   name: 'Beach',
   img: images.Beach,
   go: () => navigation.navigate('Beach')

  },

  {id: "4",
  name: 'Frozen Hill',
  img: images.Frozenhill,
  go: () => navigation.navigate('FrozenHill')
 },
  ])

  function renderDestination(item, index){
    var destinationStyle = {};

    if (index==0) {
      destinationStyle={marginLeft: SIZES.padding}
    }

    return(
      <TouchableOpacity style={{justifyContent: "center", marginHorizontal: SIZES.base, ...destinationStyle}}
      onPress={item.go}>
         <Image source={item.img}
           resizeMode="cover"
           style={{height: "82%", width: SIZES.width *0.82, borderRadius: 15}}
         />
         <Text style={{marginTop: SIZES.base / 2, ...FONTS.h4, color: COLORS.black, fontWeight: "600"}}>
         {item.name}</Text>
      </TouchableOpacity>
    )

  }

  return (
    <View style={styles.Body}>

    {/* banner */}
    <View style={{flex:1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding}}>
    <Image source={images.Travel2} 
      resizeMode="cover"
      style={{width: '100%', height: '100%', borderRadius: 15}}
    />
     </View>

      {/* Options */}
     <View style={{flex:1, justifyContent: "center",}}>
       <View style={{flex:1, flexDirection:"row", marginTop: SIZES.padding, paddingHorizontal: SIZES.base}}>
         <OptionItem  
           icon = {icons.Airplane}
           Color ={['#46aeff', '#5884ff']}
           label="Flight"
           onPress={()=>{console.log("Airplane")}}
         />
          <OptionItem  
           icon = {icons.Train}
           Color ={['#fddf90', '#fcda13']}
           label="Train"
           onPress={()=>{console.log("Train")}}
         />
          <OptionItem  
           icon = {icons.Taxi}
           Color ={['#e973ad', '#da5df2']}
           label="Bus"
           onPress={()=>{console.log("Bus")}}
         />
          <OptionItem  
           icon = {icons.Bus}
           Color ={['#facba8', '#fe6bba']}
           label="Taxi"
           onPress={()=>{console.log("Taxi")}}
         />
       </View>

       <View style={{flex:1, flexDirection:"row", marginTop: SIZES.radius, paddingHorizontal: SIZES.base}}>
         <OptionItem  
           icon = {icons.Hotel}
           Color ={['#46aeff', '#5884ff']}
           label="Hotel"
           onPress={()=>{console.log("Hotel")}}
         />
          <OptionItem  
           icon = {icons.Eat}
           Color ={['#fddf90', '#fcda13']}
           label="Eat"
           onPress={()=>{console.log("Eat")}}
         />
          <OptionItem  
           icon = {icons.Adventure}
           Color ={['#e973ad', '#da5df2']}
           label="Adventure"
           onPress={()=>{console.log("Adventure")}}
         />
          <OptionItem  
           icon = {icons.Event}
           Color ={['#facba8', '#fe6bba']}
           label="Event"
           onPress={()=>{console.log("Event")}}
         />
       </View>
     </View>

       {/* Destination */}
       <View style={{flex:1}}>
         <Text style={{marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2, fontWeight: '800', color: COLORS.black}}
         >Destination</Text>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator= {false}
          keyExtractor={item => item.id.toString()}
          data={destination}
          renderItem={({item, index})=>renderDestination(item, index)}
        />
       </View>


  
    </View>
  )
}
const styles = StyleSheet.create({
  Body: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  shadow: {
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 2
   },
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
   elevation: 5
  }
})
export default Home