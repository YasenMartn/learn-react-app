import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'

const data = [
  {
    title: "",
  },
  {
    title: "Multiple Choice",
  },
]

const Exercises = () => {
  return (
    <View className="p-3 gap-3 flex-row flex-wrap justify-center">
      {data.map((item, index) => (
        <View key={index} className="bg-blue-400 w-44 h-40">
          <Pressable android_ripple={{color: "white"}} className="w-44 h-40 p-5">
            <Text className="text-white ">{item.title}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  )
}

export default Exercises;