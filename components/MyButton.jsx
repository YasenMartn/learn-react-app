import { View, Text, Pressable } from 'react-native'
import React from 'react'

const MyButton = ({children, onPress, buttonColor,}) => {
  return (
    <View className="rounded-md overflow-hidden">
      <Pressable className="p-5 py-3 w-full " 
        style={{backgroundColor: buttonColor}} 
        android_ripple={{color: "white"}} 
        onPress={onPress}
      >
        <Text className="text-center text-lg font-[CairoB] text-white">{children}</Text>
      </Pressable>
    </View>
  )
}

export default MyButton