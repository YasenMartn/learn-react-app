import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'
import { reactData } from '../reactData'
import { useEffect } from 'react';
import ExerciseUI from '../components/ExerciseUI';
import LearnUI from '../components/LearnUI';
import { useState } from 'react';

const Details = ({route, navigation}) => {

  const {id} = route.params;
  const {title, data} = reactData.find(item => item.id === id)
  const [currentItemIndex, setCurrentItemIndex] = useState(0);


  const handleNext = () => {
    if (currentItemIndex === data.length - 1) {
      navigation.navigate("Learn React in Arabic")
    }
    setCurrentItemIndex((prevIndex) => prevIndex + 1);
  };

  const currentItem = data[currentItemIndex];

  let componentToRender = null;

  if (currentItem) {
    if (currentItem.type === "lesson") {
      componentToRender = (
        <LearnUI data={currentItem.lessonData} onNext={handleNext} />
      );
    } else if (currentItem.type === "exercise") {
      componentToRender = (
        <ExerciseUI data={currentItem.exerciseData[0]} onNext={handleNext} />
      );
    }
  }

  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

  return (
    <View className="flex-1">
      {componentToRender}
    </View>
  )
}

export default Details