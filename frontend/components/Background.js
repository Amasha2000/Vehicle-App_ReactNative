import { ImageBackground, View } from 'react-native'
import React from 'react'

export default function Background({children}) {
  return (
    <View>
      <ImageBackground source={require('../assets/carImage.jpg')} style={{height:'100%'}}>
      <View>
        {children}
        </View>
      </ImageBackground>
    </View>
  )
}
