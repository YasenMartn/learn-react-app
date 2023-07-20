import { View, Text, Button } from "react-native";
import React from "react";
import MyButton from "./MyButton";

const LearnUI = ({ data, onNext }) => {
  return (
    <View className="p-5 flex-1  justify-between">
      <View className="space-y-5">
        {data.map((item, index) => (
          <View key={index} className="space-y-2">
            <Text className="text-center font-[CairoB] text-xl dark:text-white">{item.title}</Text>
            <View className="bg-slate-700 p-3 space-y-5 rounded-sm">
              {item.desc.map((descItem, descIndex) => (
                <Text key={descIndex} className="font-[CairoR] text-lg dark:text-white">{descItem.title}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>
      <MyButton onPress={onNext} buttonColor="#61DAFB">متابعة</MyButton>
    </View>
  );
};

export default LearnUI;
