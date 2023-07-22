import { View, Text } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import DrawerNav from '../navigation/DrawerNav';
import { useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';

const Container = () => {

  const color = "#1f1451"
  //gray 282c34
  //blue 61DAFB

  const { colorScheme, setColorScheme } = useColorScheme();
  //blue 3b82f6


  const lightTheme = {
    dark: false,
    colors: {
      primary: "#61DAFB",
      background: '#eeeeee',
      card: color, //header color
      // text: '#000',
      // border: '#4B0082',
      // notification: '#00ccbb',
    },
  };

  const darkTheme = {
    dark: false,
    colors: {
      primary: "#61DAFB",
      background: '#1e293b',
      card: color, //header color
      text: "#61DAFB",
      // border: '#4B0082',
      // notification: '#4B0082',
    },
  };

  return (
    <>
      <PaperProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
        <NavigationContainer theme={colorScheme === "dark" ? darkTheme : lightTheme}>
          <DrawerNav/>
        </NavigationContainer>
      </PaperProvider>
      <StatusBar style="light" backgroundColor={color} />
    </>
  )
}

export default Container