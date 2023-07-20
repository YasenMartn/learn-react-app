import { View, Text, Pressable } from 'react-native'
import React from 'react'

const MyButton = ({children, onPress, buttonColor}) => {
  return (
    <Pressable className="p-5 py-3 w-full" style={{backgroundColor: buttonColor}} android_ripple={{color: "gray"}} onPress={onPress}>
      <Text className="text-center text-lg font-[CairoB] text-white">{children}</Text>
    </Pressable>
  )
}

export default MyButton