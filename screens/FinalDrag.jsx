import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useState } from 'react'

const options = [
  "npm",
  "node",
  "contacts",
  "start",
  "launch",
]

const FinalDrag = () => {
  return (
    <View className="flex-1 p-3 justify-between">
      <Text className="text-lg font-bold">Drag and drop the commands to create a new React app named "contacts" and start it.</Text>

      {/* dropzones */}
      <View className="space-y-3">
        {/* drop zone 1 */}
        <View className="flex-row space-x-2">
          <Text>npx create-react-app</Text> 
          <View className="border border-black w-20 h-10"></View>
        </View>
        
        <Text className="h-10">cd contacts</Text> 

         {/* drop zone 2 and 3 */}
         <View className="flex-row space-x-2">
          <View className="border border-black w-20 h-10 "></View>
          <View className="border border-black w-20 h-10"></View>
        </View>
      </View>

      <View className="space-y-2">
        {/* initial place */}
        <View className="flex-row gap-2 flex-wrap">
          {options.map((item, index) => (
            <View key={index} className="p-3 bg-blue-400">
              <Text className="text-white">{item}</Text>
            </View>
          ))}
        </View>

        <Button className="bg-blue-500">check answer</Button>
      </View>
    </View>
  )
}

export default FinalDrag