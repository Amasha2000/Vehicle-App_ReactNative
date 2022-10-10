import { ImageBackground, View } from 'react-native'
import React from 'react'

export default function Background({children}) {
  return (
    <View>
      <ImageBackground source={require('../assets/carImage3.png')} style={{height:'60%', width:'100%',marginTop:50,marginBottom:30}}>
      <View>
        {children}
        </View>
      </ImageBackground>
    </View>
  )
}
