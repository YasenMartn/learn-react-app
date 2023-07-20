import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const options = [
  { text: 'Option 1', answer: 'correct' },
  { text: 'Option 2', answer: 'incorrect' },
  { text: 'Option 3', answer: 'incorrect' },
];

const ReusableComponent = () => {
  const [answer, setAnswer] = useState(null);
  const optionPositions = options.map(() => useSharedValue({ x: 0, y: 0 }));

  const checkAnswer = () => {
    if (answer === 'correct') {
      alert('Correct answer!');
    } else {
      alert('Incorrect answer!');
    }
  };

  const handleOptionDragRelease = (index, e, gestureState) => {
    const dropZonePosition =
      optionPositions[index].value.y - gestureState.moveY > 150
        ? { x: 0, y: 0 }
        : optionPositions[index].value;
    optionPositions[index].value = withSpring(dropZonePosition);
    setAnswer(dropZonePosition.y === 0 ? null : options[index].answer);
  };

  const optionStyles = options.map((_, index) =>
    useAnimatedStyle(() => ({
      transform: [
        { translateX: optionPositions[index].value.x },
        { translateY: optionPositions[index].value.y },
      ],
    }))
  );

  return (
    <View className="flex-1 p-3 justify-between items-center">
      <Text className="">Drag the correct answer to the drop zone:</Text>

      <View className="border border-black p-5">
        {answer ? (
          <Text className="">{answer}</Text>
        ) : (
          <Text className="">Drop here</Text>
        )}
      </View>

      <View className="bg-rose-100">
        {options.map((option, index) => (
          <Animated.View key={index} style={optionStyles[index]} className="p-3">
            <Draggable
              x={optionPositions[index].value.x}
              y={optionPositions[index].value.y}
              renderSize={56}
              renderColor="#00ccbb"
              onDragRelease={(e, gestureState) =>
                handleOptionDragRelease(index, e, gestureState)
              }
              onDrag={() => setAnswer(null)}
            >
              <Text className="text-lg">{option.text}</Text>
            </Draggable>
          </Animated.View>
        ))}
      </View>

      <TouchableOpacity className="bg-blue-500 p-3" onPress={checkAnswer}>
        <Text className="">Check Answer</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ReusableComponent;
