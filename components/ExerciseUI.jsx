import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react';
import MyButton from './MyButton';
import { RadioButton } from 'react-native-paper';

const ExerciseUI = ({ data, onNext }) => {

  const {question, answer, options, dir} = data;

  const [buttonTitle, setbuttonTitle] = useState("تفقد الجواب")
  const [buttonColor, setbuttonColor] = useState("#61DAFB")

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setbuttonTitle("تفقد الجواب")
    setbuttonColor("#61DAFB")
  };

  const checkAnswer = () => {
    if(selectedOption === answer) {
      setbuttonTitle("متابعة")
      setbuttonColor("#10b981")
    } else {
      setbuttonTitle("المحاولة مجددا")
      setbuttonColor("#ef4444")
      setSelectedOption(null)
    }
  }

  return (
    <View className="p-5 flex-1 justify-between">
      <Text className="font-[CairoB] text-xl dark:text-white">{question}</Text>
      <View>
        {options.map((option, index) => (
          <View key={index}>
            <Pressable className={`bg-slate-700 p-5 py-3 pr-3 flex-row items-center ${dir === "ltr" ? "justify-start" : "justify-end"} `}
              onPress={() => handleOptionSelect(option)}
              android_ripple={{color: "gray"}}
            >
              <Text className="text-white font-[CairoR] text-lg mr-2">{option}</Text>
              <RadioButton
                status={selectedOption === option ? 'checked' : 'unchecked'}
                onPress={() => handleOptionSelect(option)}
                uncheckedColor="white"
              />
            </Pressable>
            {index !== options.length - 1 && <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }} />}
          </View>
        ))}
      </View>
      <MyButton onPress={checkAnswer} buttonColor={buttonColor}>{buttonTitle}</MyButton>
    </View>
  );
};

export default ExerciseUI