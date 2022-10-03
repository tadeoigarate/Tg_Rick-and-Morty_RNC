import React from 'react'
import { View, Image, Dimensions, StyleSheet } from 'react-native';

const {height, width} = Dimensions.get('screen')

export const LoadingScreen = () => {
    
  return (
    <View style={style.imageConteiner}>
            <Image 
            source={require('../assets/portal-rick-and-morty.gif')}
            style={style.image}/>
        </View>
  )
}

const style = StyleSheet.create({
  imageConteiner:{
    height: height,
    width: width,
    backgroundColor: 'rgb(249, 251, 246)'
  },

  image:{
    height:height*0.5,
    width:width,
    right:12,
    marginVertical:width*0.4,
  }
})
