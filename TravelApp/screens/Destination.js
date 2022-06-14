import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import React from 'react'
import { COLORS, images, icons, SIZES, FONTS } from '../Constants'
import LinearGradient from 'react-native-linear-gradient';


const StarReview =({Rate})=>{
var StarComponent=[];
var fullStar = Math.floor(Rate)
var noStar = Math.floor(5.0 - Rate)
var halfStar = 5.0 - fullStar - noStar

// fullStar
for (var i= 0;  i<fullStar; i++) {
  StarComponent.push(
    <Image source={icons.fullStar}
      key={'fullstar-$(89)'}
      resizeMode='cover'
      style={{width: 20, height: 20}}
    />
  )
  
}
// halfStar
for (var i= 0;  i<halfStar; i++) {
  StarComponent.push(
    <Image source={icons.halfStar}
      key={'halfstar-$(01)'}
      resizeMode='cover'
      style={{width: 20, height: 20}}
    />
  )
  
}

// nostart
for (var i= 0;  i<noStar; i++) {
  StarComponent.push(
    <Image source={icons.star}
      key= {'nostar-$(9)'}
      resizeMode='cover'
      style={{width: 20, height: 20}}
    />
  )
  
}

return(
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    {StarComponent}
    <Text style={{color:COLORS.black}}>{Rate}</Text>
  </View>

)
}

const IconLabel =({icon, label})=>{
  return(
    
    <View style={{alignItems: 'center', marginVertical: SIZES.base}}>
    <TouchableOpacity>
       <Image source={icon}
         resizeMode="cover"
         style={{width:50, height: 50}}
       />
       <Text style={{marginTop: SIZES.padding, color: COLORS.gray, ...FONTS.h4, alignItems: 'center'}}>{label}</Text>
       </TouchableOpacity>
    </View>
  )

}

const Destination = ({navigation}) => {
  return (
    <View style={styles.container}> 

    {/* Header */}
   <View style={styles.header}>
     <Image
       source={images.Skillvilla}
       resizeMode='cover'
       style={{
        width: '100%',
         height: '70%' 
       }}
     />

     <View style={[{
       position: "absolute", left: '5%', bottom: '5%', 
       right: '5%', borderRadius: 15, padding: SIZES.padding,
        backgroundColor: COLORS.white
       }, styles.Shadow]}
       >

       <View style={{flexDirection:'row'}}>
          <View style={styles.shadow}>
            <Image source={images.Skillvilla}
              resizeMode="cover"
              style={{height: 70, width: 70, borderRadius: 15 }}
            />
            </View>


            <View style={{marginHorizontal: SIZES.radius, justifyContent: 'space-around'}}>
                <Text style={{...FONTS.h3, color: COLORS.black}}>Skillvilla</Text>
                <Text style={{color: COLORS.gray, ...FONTS.Body3}}>Germany</Text>

                <StarReview
                  Rate={4.5}
                />
            </View>   
       </View>
       <View style={{marginTop: SIZES.radius}}>
          <Text style={{color: COLORS.gray, ...FONTS.Body3, textAlign: 'center'}}>
            Skill villa offers simple rooms with mountain views in front of the skill lift to the ski Resort
          </Text>
       </View>

     </View>
   </View>

           {/* Header Button */}

           <View style={{position: 'absolute', top:20, left: 20, right: 20, flexDirection: 'row' }}>
             <View style={{flex: 1}}>
               <TouchableOpacity
               onPress={()=> {navigation.navigate('Home')}}>
                 <Image
                   source={icons.BackIcon}
                   resizeMode="cover"
                   style={{width: 20, height: 20, color: 'white'}}
                 />
               </TouchableOpacity>
             </View>
             <View style={{flex:1, alignItems: 'flex-end'}}>
             <TouchableOpacity
               onPress={()=> {console.log('Menu Pressed')}}>
                 <Image
                   source={icons.menu}
                   resizeMode="cover"
                   style={{width: 20, height: 20, color: 'white'}}
                 />
               </TouchableOpacity>
             </View>
           </View>

    {/* Body */}
    <View style={{flex: 1}}>
    {/* Icons */}
     <View style={{flexDirection: 'row', marginTop: SIZES.base, 
     paddingHorizontal: SIZES.padding *2, justifyContent: 'space-between'}}>
     
       <IconLabel
         icon={icons.House}
         label="Villa"
       /> 

       <IconLabel
         icon={icons.Packing}
         label="parking"
     
       />
       <IconLabel
         icon={icons.Wind}
         label="Wind"
     
       /> 
       </View> 
     </View>
      {/* About */}
      <View style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding, top: -45}}>
        <Text style={{...FONTS.h1, color: COLORS.black}}>About</Text>
        <Text style={{...FONTS.Body3, color: COLORS.gray}}>Located in Apits along Belgin with the amptitude of 1,2827 meters, A ski lodge or day lodge is a building located in a ski area that provides amenities such as food, beverages, seating area, restrooms, and locker rooms for skiers and snowboarders. Larger resorts have a day lodge at each base area and also at mid-mountain, 
        summit, or remote locations within the ski are </Text>
      </View>

    {/* Footer */}
    <View style={{flex: 0.5, paddingHorizontal: SIZES.padding}}>
    <LinearGradient 
    style={{height: 70, width: '100%', borderRadius: 15}}
    colors={['#edf0fc', '#d6dfff']}
    start={{x:0 , y:0}}
    end={{x:1 , y:0}}>
    <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
    <View style={{flex:1, marginHorizontal: SIZES.padding, justifyContent: 'center'}}>
      <Text style={{...FONTS.h1}}>$1000</Text>
    </View>
    <TouchableOpacity
    style={{width: 130, height: '70%', marginHorizontal: SIZES.padding}}
    onPress={()=>{console.log('Booking Pressed')}}>
    <LinearGradient style={{flex:1, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}
    colors={['#45aeff', '#5884ff']}
    start={{x:0, y:0}}
    end={{x:1, y:0}}>
     <Text style={{color: COLORS.white, ...FONTS.h2}}>BOOKING</Text>
    </LinearGradient>
    </TouchableOpacity>

    </View>

    </LinearGradient>

    </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.white
  },
  Shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
   shadowRadius: 3.84,
   elevation: 5
  },
  header: {
    flex: 2
  }
})

export default Destination

