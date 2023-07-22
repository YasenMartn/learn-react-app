import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import MyButton from "./MyButton";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/styles/hljs';

const LearnUI = ({ data, onNext }) => {
  return (
    <View className="flex-1 w-full">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="p-5 flex-1 justify-between pb-5 relative ">
          <View className="space-y-5">
            {data.map((item, index) => (
              <View key={index} className="space-y-2">
                {item.title && <Text className="font-[CairoB] text-xl text-slate-700 dark:text-white pt-1">{item.title}</Text>}
                <View className="bg-white dark:bg-slate-700 p-3 space-y-5 rounded-md">
                  {item.desc.map((descItem, descIndex) => (
                    <Text key={descIndex} className="font-[CairoR] text-lg text-slate-700 dark:text-slate-300">{descItem.title}</Text>
                  ))}
                </View>
                {item.info && 
                <View className="p-3 bg-emerald-500 flex-row justify-between space-x-3 rounded-md">
                  <Text className="font-[CairoR] text-lg text-white flex-shrink">{item.info}</Text>
                  <MaterialCommunityIcons name="lightbulb-on" size={24} color="#fff" />
                </View>}

                {item.code &&
                <View>
                  {item.codeTitle && <Text className="font-[CairoR] dark:text-white text-lg">{item.codeTitle}</Text>}
                  <SyntaxHighlighter
                    language="react"
                    style={monokai}
                    fontSize={12}
                    // customStyle={{padding: 20}}
                  >
                    {item.code}
                  </SyntaxHighlighter>
                </View>}

              </View>

            ))}
          </View>
        </View>
      </ScrollView>
      <View className="bg-white dark:bg-slate-800 relative p-5 py-3">
        <MyButton onPress={onNext} buttonColor="#3b82f6">متابعة</MyButton>
      </View>
    </View>
  );
};

export default LearnUI;
