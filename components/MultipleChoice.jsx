import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { Button, RadioButton } from 'react-native-paper';
import { Alert } from 'react-native';
import { useColorScheme } from 'nativewind';

const data = [
  {
    question: "What color is an apple?",
    answer: "red",
    options: ["blue", "red", "green"],
    rtl: true
  },
  {
    question: "ما هو لون الموز؟",
    answer: "أصفر",
    options: ["أزرق", "أصفر",],
    rtl: false,
  },
]

const MultipleChoice = () => {

  const { colorScheme, setColorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black"

  const [currentQ, setcurrentQ] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    if (selectedOption === data[currentQ].answer) {
      Alert.alert("Correct");
      if (currentQ === data.length - 1) {
        // Reset the quiz if it's the last question
        setcurrentQ(0);
        setSelectedOption(null);
      } else {
        // Proceed to the next question
        setcurrentQ(currentQ + 1);
        setSelectedOption(null);
      }
    } else {
      Alert.alert("Wrong");
      setSelectedOption(null);
    }
  };

  
  return (
    <SafeAreaView className="p-5 flex-1 justify-between bg-[#eeeeee] dark:bg-slate-800">

      <Text className="text-lg dark:text-white font-[CairoB]">{data[currentQ].question}</Text>

      <View>
        {data[currentQ].options.map((option, index) => (
          <View key={index}>
            <Pressable className={`bg-white dark:bg-slate-700 p-5 py-3 px-3 items-center shadow-lg
              ${data[currentQ].rtl ? "flex-row" : "flex-row-reverse"}
            `}
              onPress={() => handleOptionSelect(option)}
              android_ripple={{color: "gray"}}
            >
              <RadioButton
                status={selectedOption === option ? 'checked' : 'unchecked'}
                onPress={() => handleOptionSelect(option)}
                uncheckedColor={color}
              />
              <Text className="dark:text-white font-[CairoR] text-lg flex-shrink ml-2">{option}</Text>
            </Pressable>
            {index !== data[currentQ].options.length - 1 && <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }} />}
          </View>
        ))}
      </View>

      <Button className="bg-blue-500 rounded-md" textColor='white' onPress={checkAnswer}>check</Button>
      
    </SafeAreaView>
  )
}

export default MultipleChoice;