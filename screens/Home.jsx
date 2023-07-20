import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import { reactData } from '../reactData'

const Home = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className=" ">
      <View className="items-start justify-center flex-row flex-wrap gap-3 p-3">
        {reactData.map(item => (
          <View className="w-40 bg-white shadow-md shadow-black flex-grow dark:bg-slate-700" key={item.id}>
            <Pressable android_ripple={{color: "gray"}} className="items-center" onPress={() => navigation.navigate("Details", {id: item.id})}>
              <Image source={item.img} className="w-[90%] h-40" resizeMode='contain'/>
              <View className="p-2">
                <Text className="font-bold text-lg text-center dark:text-white">{item.title}</Text>
              </View>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default Home