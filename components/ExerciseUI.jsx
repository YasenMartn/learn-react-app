import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react';
import MyButton from './MyButton';
import { RadioButton } from 'react-native-paper';
import { useColorScheme } from 'nativewind';

const ExerciseUI = ({ data, onNext, dataLength, currentItemIndex }) => {

  const { colorScheme, setColorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black"
  const {question, answer, options, dir} = data;

  const [buttonTitle, setbuttonTitle] = useState("تفقد الجواب")
  const [buttonColor, setbuttonColor] = useState("#3b82f6")

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setbuttonTitle("تفقد الجواب")
    setbuttonColor("#3b82f6")
  };

  const checkAnswer = () => {
    if(buttonTitle === "متابعة"){
      onNext();
      setSelectedOption(null)
      setbuttonTitle("تفقد الجواب")
      setbuttonColor("#3b82f6")
    } else {
      if(selectedOption === answer) {
        setbuttonTitle("متابعة")
        setbuttonColor("#10b981")
      } else {
        setbuttonTitle("المحاولة مجددا")
        setbuttonColor("#ef4444")
        setSelectedOption(null)
      }
    }
  }

  return (
    <View className="flex-1 justify-between">
      <View className="p-5">
        <Text className="font-[CairoB] text-xl dark:text-white pt-1">{question}</Text>
      </View>
        <View className="p-5">
          {options.map((option, index) => (
            <View key={index}>
              <Pressable className={`bg-white dark:bg-slate-700 p-5 py-3 px-3 items-center
                  ${dir === "ltr" ? "flex-row" : "flex-row-reverse"} 
                `}
                onPress={() => handleOptionSelect(option)}
                android_ripple={{color: "gray"}}
                disabled={buttonTitle === "متابعة" ? true : false}
                >
                <RadioButton
                  status={selectedOption === option ? 'checked' : 'unchecked'}
                  onPress={() => handleOptionSelect(option)}
                  uncheckedColor={color}
                  disabled={buttonTitle === "متابعة" ? true : false}
                />

                <Text className={`dark:text-white font-[CairoR] text-lg ${dir === "ltr" ? "ml-2 " : "mr-2"}`}>
                  {option}
                </Text>

              </Pressable>
              {index !== options.length - 1 && <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }} />}
            </View>
          ))}
        </View>
      <View className="bg-white dark:bg-slate-800 relative p-5">
        <MyButton onPress={checkAnswer} buttonColor={buttonColor}>{buttonTitle}</MyButton>
      </View>
    </View>
  );
};

export default ExerciseUI