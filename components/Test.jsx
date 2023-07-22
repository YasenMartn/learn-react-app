import { View, Text, TextInput, ScrollView, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { useState } from 'react'

const data = [
  {
    id: "importReact",
    textBefore: "import React ",
    inputMiddle: {
      maxLength: 4,
      answer: "from"
    },
    textAfter: " 'react';",
  },
  {
    id: "constHome",
    textBefore: "const ",
    inputMiddle: {
      maxLength: 4,
      answer: "Home"
    },
    textAfter: " = () => ",
    inputLast: {
      maxLength: 1,
      answer: "{",
      style: {minWidth: 20},
    },
  },
  {
    textBefore: "return (",
    style: { paddingLeft: 20 },
  },
  {
    textBefore: "<div>",
    style: { paddingLeft: 40 },
  },
  {
    textBefore: "<h1>Hello</h1>",
    style: { paddingLeft: 60 },
  },
  {
    textBefore: "</div>",
    style: { paddingLeft: 40 },
  },
  {
    textBefore: ")",
    style: { paddingLeft: 20 },
  },
  {
    textBefore: "}",
  },
  {
    inputMiddle: {
      maxLength: 6,
      answer: "export"
    },
    textAfter: " default Home;",
  },
]

const Test = () => {

  const [userAnswers, setUserAnswers] = useState({});

  // Step 2: Add onChangeText to update userAnswers for each input
  const handleInputChange = (id, value) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value,
    }));
  };

  // Step 3: Implement check button functionality
  const handleCheckButton = () => {
    let isCorrect = true;
    for (const item of data) {
      if (item.inputMiddle && userAnswers[item.id] !== item.inputMiddle.answer) {
        isCorrect = false;
        break;
      }
      if (item.inputLast && userAnswers[item.id] !== item.inputLast.answer) {
        isCorrect = false;
        break;
      }
    }
    // Step 4: Show an alert based on correctness
    if (isCorrect) {
      Alert.alert('Correct!', 'Congratulations, all answers are correct!', [
        { text: 'OK' },
      ]);
    } else {
      Alert.alert('Wrong!', 'Oops, some answers are incorrect. Please try again.', [
        { text: 'OK' },
      ]);
    }
  };

  return (
    <SafeAreaView className="flex-1 p-5 items-center justify-between">
      <Text>Fill in the blank to finish the code</Text>

      <View className="items-start justify-center  space-y-3 w-full">
        {data.map((item, index) => (
          <View className="flex-row items-center justify-center" style={[item.style]} key={index}>      
            {item.textBefore && 
              <Text className="text-white text-base font-bold">{item.textBefore}</Text>
            }
            {item.inputMiddle && 
              <TextInput 
                className="border-b border-sky-500 text-white text-base font-bold min-w-[64px]" 
                maxLength={item.inputMiddle.maxLength}
                onChangeText={(value) => handleInputChange(index, value)}
              />
            }
            {item.textAfter && 
              <Text className="text-white text-base font-bold">{item.textAfter}</Text>
            }
            {item.inputLast && 
              <TextInput 
                className="border-b border-sky-500 text-white text-base font-bold min-w-[64px]" 
                maxLength={item.inputLast.maxLength}
                style={[item.inputLast.style]}
                onChangeText={(value) => handleInputChange(index, value)}
              />
            }
          </View>
        ))}
      </View>

      <Button onPress={handleCheckButton}>check</Button>
    </SafeAreaView>
  )
}

export default Test