import { View, Text, Alert, TextInput, Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { Button } from 'react-native-paper'

const data = [
  {
    question: "Fill in the blank to create a React Functional component",
    text: "Hello World",
    part2: "</span>",
    answer: "<span>",
    answerLength: 6,
  },
  {
    question: "Fill in the blank to create a valid div tag",
    text: "This is a div",
    part1: "<div>",
    answer2: "</div>",
    answer2Length: 6,
  },
]

const Fill = () => {

  const [currentQ, setcurrentQ] = useState(0)

  const checkAnswer = () => {
    const currentQuestionData = data[currentQ];
  
    if (
      (currentQuestionData.answer && userInput === currentQuestionData.answer) ||
      (currentQuestionData.answer2 && userInput2 === currentQuestionData.answer2)
    ) {
      Alert.alert("Correct");
      if (currentQ === data.length - 1) {
        // Reset the quiz if it's the last question
        setcurrentQ(0);
      } else {
        // Proceed to the next question
        setcurrentQ(currentQ + 1);
      }
    } else {
      Alert.alert("Wrong");
    }
    setUserInput("");
    setUserInput2("");
  };
  

  const [userInput, setUserInput] = useState("");
  const [userInput2, setUserInput2] = useState("");

  const handleChangeText = (text) => {
    setUserInput(text);
    if (text.length >= data[currentQ].answerLength) {
      Keyboard.dismiss();
    }
  };

  const handleChangeText2 = (text) => {
    setUserInput2(text);
    if (text.length >= data[currentQ].answer2Length) {
      Keyboard.dismiss();
    }
  };

  return (
    <SafeAreaView className="p-5 flex-1 justify-between bg-[#eeeeee] dark:bg-slate-800">

      <Text className="text-lg dark:text-white font-[CairoB]">{data[currentQ].question}</Text>

      <View className="flex-row space-x-2 items-center justify-center">

        {/* answer1 and text1 */}
        {data[currentQ].part1 && <Text className="text-red-500 font-bold text-lg">{data[currentQ].part1}</Text>}
        {data[currentQ].answerLength && 
        <TextInput
          className="border-b border-red-500 min-w-[64px] text-red-500 font-bold text-lg"
          maxLength={data[currentQ].answerLength}
          value={userInput}
          onChangeText={handleChangeText}
        />}

        <Text className="font-bold text-lg dark:text-white">{data[currentQ].text}</Text>

        {/* answer2 and text2 */}
        {data[currentQ].answer2Length && 
        <TextInput
          className="border-b border-red-500 min-w-[64px] text-red-500 font-bold text-lg"
          maxLength={data[currentQ].answer2Length}
          value={userInput2}
          onChangeText={handleChangeText2}
        />}
        {data[currentQ].part2 && <Text className="text-red-500 font-bold text-lg">{data[currentQ].part2}</Text>}
        
      </View>

      <Button className="bg-blue-500 rounded-md" textColor='white' onPress={checkAnswer}>check</Button>

    </SafeAreaView>
  )
}

export default Fill