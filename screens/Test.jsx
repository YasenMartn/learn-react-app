import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const data = [
  {
    type: "lesson",
    learnData: [
      {
        title: "ما هو React؟",
        desc: [
          {
            title: "ال React هو مكتبة جافا سكريبت مفتوحة المصدر ومجانية لبناء واجهات المستخدم.",
          },
          {
            title: "لا تركز React على جوانب أخرى في التطبيق مثل طلبات HTTP / التوجيه.",
          },
        ],
      },
      {
        title: "Why learn React?",
        desc: [
          {
            title: "React is a free open-source javascript library for building user interfaces.",
          },
          {
            title: "React does not focus on other aspects of your application like http requests/routing.",
          },
        ],
      },
    ],
  },
  {
    type: "exercise",
    exerciseData: [
      {
        question: "What color are apples?",
        answer: "red",
        options: [
          "red",
          "blue",
          "black",
          "orange"
        ],
      },
    ],
  },
];

const LearnUI = ({ data, onNext }) => {
  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <Text>{item.title}</Text>
          {item.desc.map((descItem, descIndex) => (
            <Text key={descIndex}>{descItem.title}</Text>
          ))}
        </View>
      ))}
      <Button title="Learn Next" onPress={onNext} />
    </View>
  );
};

const ExerciseUI = ({ data, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    // Check if an option is selected before proceeding to the next question
    if (selectedOption !== null) {
      setSelectedOption(null);
      onNext();
    }
  };

  return (
    <View>
      <Text>{data.question}</Text>
      {data.options.map((option, index) => (
        <Button
          key={index}
          title={option}
          onPress={() => handleOptionSelect(option)}
          disabled={selectedOption !== null}
        />
      ))}
      <Button title="Next" onPress={handleNext} disabled={selectedOption === null} />
    </View>
  );
};

const Test = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handleNext = () => {
    setCurrentItemIndex((prevIndex) => prevIndex + 1);
  };

  const currentItem = data[currentItemIndex];

  let componentToRender = null;

  if (currentItem) {
    if (currentItem.type === "lesson") {
      componentToRender = (
        <LearnUI data={currentItem.learnData} onNext={handleNext} />
      );
    } else if (currentItem.type === "exercise") {
      componentToRender = (
        <ExerciseUI data={currentItem.exerciseData[0]} onNext={handleNext} />
      );
    }
  }

  return (
    <View className="p-5">
      {componentToRender}
    </View>
  );
};

export default Test;
