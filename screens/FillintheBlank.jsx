import { View, Text, TextInput, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';

const data = {
  question: "Fill in the blank to create a valid span tag",
  text: "Hello World",
  part2: "</span>",
  answer: "<span>",
  answerLength: 6,
};

const FillintheBlank = () => {
  const [userInput, setUserInput] = useState("");

  const handleCheckAnswer = () => {
    if (userInput === data.answer) {
      Alert.alert("Correct Answer", "Your answer is correct!");
    } else {
      Alert.alert("Wrong Answer", "Your answer is incorrect!");
    }
  };

  const handleChangeText = (text) => {
    setUserInput(text);
    if (text.length >= data.answerLength) {
      Keyboard.dismiss();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="flex-1 p-3 justify-between ">
        <Text className="text-lg font-[CairoB] dark:text-white">{data.question}</Text>

        <View className="flex-row space-x-2 items-center justify-center">
          <TextInput
            className="border-b border-red-500 min-w-[64px] text-red-500 font-bold text-lg"
            maxLength={data.answerLength}
            value={userInput}
            onChangeText={handleChangeText}
          />
          <Text className="font-bold text-lg dark:text-white">{data.text}</Text>
          <Text className="text-red-500 font-bold text-lg">{data.part2}</Text>
        </View>

        <Button className="bg-blue-500" onPress={handleCheckAnswer}>check answer</Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FillintheBlank;
