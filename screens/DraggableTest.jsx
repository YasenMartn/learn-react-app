import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Draggable from 'react-native-draggable';

const Exercise7 = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Apple', backgroundColor: '#FFA500' },
    { id: 2, text: 'Banana', backgroundColor: '#FFFF00' },
    { id: 3, text: 'Orange', backgroundColor: '#FF4500' },
    { id: 4, text: 'Grapes', backgroundColor: '#800080' },
  ]);

  const handleDrop = (itemId) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drag and Drop Exercise</Text>
      {items.map(item => (
        <Draggable
          key={item.id}
          onShortPressRelease={() => handleDrop(item.id)}
        >
          <View style={[styles.item, { backgroundColor: item.backgroundColor }]}>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
        </Draggable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 4,
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Exercise7;
