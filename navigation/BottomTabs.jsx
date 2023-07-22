import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import HomeStack from './HomeStack';
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
      <MaterialCommunityIcons name="language-html5" size={24} color={color} />,
  }
  const FavoritesOption = {
    tabBarIcon: ({ color }) => 
    <MaterialCommunityIcons name="ab-testing" size={24} color={color} />,
    headerShown: true,
  }

  
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeStack} options={HomeOption}/>
      <Tab.Screen name="Interview" component={Exercises} options={FavoritesOption}/>
      <Tab.Screen name="Exzzciszes" component={Exercises} options={HomeOption}/>
      <Tab.Screen name="Exzzises" component={Exercises} options={HomeOption}/>

      {/* <Tab.Screen name="Test" component={Test} options={HomeOption}/>
      <Tab.Screen name="Draggable" component={Draggable} options={HomeOption}/>
      <Tab.Screen name="Draggazble" component={FinalDrag} options={SettingsOption}/> */}
    </Tab.Navigator>
  )
}

export default BottomTabs