import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import QuizStack from './QuizStack';
import Test from '../screens/Test';
import Draggable from '../screens/Draggable';
import FinalDrag from '../screens/FinalDrag';
import FillintheBlank from '../screens/FillintheBlank';
import Exercises from '../screens/Exercises';

const Tab = createBottomTabNavigator();



const BottomTabs = () => {

  const { colorScheme, setColorScheme } = useColorScheme();

  const screenOptions = {
    // tabBarActiveTintColor: '#00ccbb',
    // tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: colorScheme === "light" ? '#fff' : "#1e293b",
      // borderTopWidth: 1,
      borderTopColor: 'gray',
    },
    tabBarLabelStyle: {
      fontSize: 13,
      fontWeight: 'bold',
      marginBottom: 2,
    },
    // tabBarIconStyle: {
    //   marginBottom: -3,
    // },
    headerShown: false,
    headerTitleStyle: {
      fontFamily: "CairoB",
      color: "white",
    },
    headerStyle: {
      elevation: 0, // Remove elevation/shadow on Android
      shadowOpacity: 0, // Remove shadow on iOS
    },
  };
  
  const HomeOption = {
    tabBarIcon: ({ color }) => 
      <MaterialCommunityIcons name="react" size={24} color={color} />, 
      headerShown: false,
  }
  const FavoritesOption = {
    tabBarIcon: ({ color }) => 
    <MaterialIcons name="favorite" size={24} color={color} />,
    headerShown: true,
  }
  const SettingsOption = {
    tabBarIcon: ({ color }) => 
      <MaterialIcons name="settings" size={24} color={color} />,
      headerShown: true,
  }
  const MisbahaOption = {
    tabBarIcon: ({ color }) => 
      <MaterialCommunityIcons name="react" size={24} color={color} />,
      headerShown: true,
  }
  const MorningOption = {
    tabBarIcon: ({ color }) => 
      <MaterialIcons name="wb-sunny" size={24} color={color} />,
      headerShown: true,
  }
  const AdkarOptions = {
    tabBarIcon: ({ color }) => 
      <Ionicons name="md-moon" size={24} color={color} />,
      headerShown: true,
  }
  
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={QuizStack} options={HomeOption}/>
      <Tab.Screen name="Exercises" component={Exercises} options={AdkarOptions}/>
      {/* <Tab.Screen name="Test" component={Test} options={HomeOption}/>
      <Tab.Screen name="Draggable" component={Draggable} options={HomeOption}/>
      <Tab.Screen name="Draggazble" component={FinalDrag} options={SettingsOption}/> */}
    </Tab.Navigator>
  )
}

export default BottomTabs