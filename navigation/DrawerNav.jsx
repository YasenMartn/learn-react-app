import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import { FontAwesome } from '@expo/vector-icons';
import CustomDrawer from '../components/CustomDrawer';
import HomeStack from './HomeStack';
import { useSelector } from 'react-redux';
import MultipleChoice from '../components/MultipleChoice';
import Fill from '../components/Fill';
import Test from '../components/Test';


const Drawer = createDrawerNavigator();


const homeOptions = {  
  drawerIcon: ({color}) => (
  <FontAwesome name="home" size={24} color={color} 
    style={{alignSelf: "center", position: "absolute", right: 10}} 
  />),
}

const DrawerNav = () => {
  const screenOptions = () => {
    return {
      headerStyle: {
        // backgroundColor: "#3b82f6",
        elevation: 0
      },
      headerTintColor: "white", //header color icon & text
      headerTitleAlign: 'center',
      headerTitle: "تطبيق الصلاة",
      headerTitleStyle: {
        fontFamily: "CairoB",
      },
      drawerActiveBackgroundColor: "#61DAFB",
      drawerActiveTintColor: "white", 
      // drawerInactiveTintColor: "black", 
      drawerPosition: "right",
      drawerLabelStyle: {
        fontFamily: "CairoB",
        marginRight: 12,
      },
      // headerRight: () => (
      //   <MaterialIcons name="menu" size={24} color="white" style={{marginRight: 15}} 
      //     onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} 
      //   />
      // ),
      // headerLeftContainerStyle: { display: 'none' },  
      headerShown: false,
    }
  }

  
  return (
    <Drawer.Navigator screenOptions={screenOptions} drawerContent={(props) => <CustomDrawer {...props} />}>
      {/* <Drawer.Screen name="الصفحة الرئيسية" component={BottomTabs} options={homeOptions}/> */}
      <Drawer.Screen name="الصفحة الرئيسية" component={HomeStack} options={homeOptions}/>
      <Drawer.Screen name="Multiple Choice" component={MultipleChoice} options={homeOptions}/>
      <Drawer.Screen name="Fill in the Blank" component={Fill} options={homeOptions}/>
      <Drawer.Screen name="Filly" component={Test} options={homeOptions}/>
    </Drawer.Navigator>
  )
}

export default DrawerNav