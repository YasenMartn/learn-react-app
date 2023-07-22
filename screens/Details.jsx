import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'
import { reactData } from '../reactData'
import { useEffect } from 'react';
import ExerciseUI from '../components/ExerciseUI';
import LearnUI from '../components/LearnUI';
import { useState } from 'react';
import * as Progress from 'react-native-progress';

const Details = ({route, navigation}) => {

  const {id} = route.params;
  const {title, data} = reactData.find(item => item.id === id)
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const dataLength = data.length - 1

  const handleNext = () => {
    if (currentItemIndex === dataLength) {
      navigation.navigate("React Master")
    }
    const newProgress = (currentItemIndex + 1) / (dataLength + 1);
    setProgress(newProgress);
    setCurrentItemIndex((prevIndex) => prevIndex + 1);
  };

  const currentItem = data[currentItemIndex];

  let componentToRender = null;

  if (currentItem) {
    if (currentItem.type === "lesson") {
      componentToRender = (
        <LearnUI data={currentItem.lessonData} onNext={handleNext} dataLength={dataLength} currentItemIndex={currentItemIndex}/>
      );
    } else if (currentItem.type === "exercise") {
      componentToRender = (
        <ExerciseUI data={currentItem.exerciseData[0]} onNext={handleNext} dataLength={dataLength} currentItemIndex={currentItemIndex}/>
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
      <View className="p-3 rotate-180">
        <Progress.Bar 
          progress={progress} 
          width={null} 
          unfilledColor='#93c5fd' 
          height={10} 
          borderRadius={10}  
          borderWidth={0}
        />
      </View>
      {componentToRender}
    </View>
  )
}

export default Details