 import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
 import { FontAwesome } from '@expo/vector-icons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import * as React from 'react';
 import { ColorSchemeName, Pressable } from 'react-native';
 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import ModalScreen from '../screens/ModalScreen';
 import NotFoundScreen from '../screens/NotFoundScreen';
 import HomeScreen from '../screens/HomeScreen'
 import TabTwoScreen from '../screens/TabTwoScreen';
 import { RootStackParamList, RootTabParamList,HomeParamList, RootTabScreenProps , TabTwoParamList} from '../types';
 import LinkingConfiguration from './LinkingConfiguration';
import MovieDetailsScreen from '../components/MovieDetailScreen';
 
 
 
 const BottomTab = createBottomTabNavigator<RootTabParamList>();
 
 export default function BottomTabNavigation() {
   const colorScheme = useColorScheme();
 
   return (
     <BottomTab.Navigator
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme].tint,
       }}>
       
       <BottomTab.Screen
         name="Home"
         
         component={TabOneNavigator}
         options={{
           tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
         }}
       />
       <BottomTab.Screen
         name="Coming_Soon"
         component={TabTwoNavigator}
         options={{
           title: 'Coming Soon',
           tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} />,
         }}
       />
       <BottomTab.Screen
         name="Search"
         component={TabTwoScreen}
         options={{
           title: 'Search',
           tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
         }}
       />
       <BottomTab.Screen
         name="Downloads"
         component={TabTwoScreen}
         options={{
           title: 'Downloads',
           tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color} />,
         }}
       />
     </BottomTab.Navigator>
   );
 }
 
 const HomeStack = createNativeStackNavigator<HomeParamList>();
  function TabOneNavigator() {
     return(
      <HomeStack.Navigator>


<HomeStack.Screen
             name='HomeScreen'
             component={HomeScreen}
             options={{headerShown : false}}
             />
      <HomeStack.Screen
      name='MovieDetailScreen'
      component={MovieDetailsScreen}
      options={{headerShown : false}}
      />
  
         </HomeStack.Navigator>
     )
 }

 const TabTwoStack = createNativeStackNavigator<TabTwoParamList>()
 
 function TabTwoNavigator(){
     return(
         <TabTwoStack.Navigator>
            <TabTwoStack.Screen
            name='TabTwoScreen'
            component={TabTwoScreen}
            options={{headerTitle: 'ftiaxno to deutero ntosflix esu ti kaneis ?' }}
            />
         </TabTwoStack.Navigator>
     )
 }