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
import TabOneScreen from '../screens/HomeScreen/index';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps, RootAuthStack } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import BottomTabNavigation from './BottomTabNavigation'
import SignIn from '../components/SignInScreen/SignIn';
import SignUp from '../components/SignUpScreen/SignUp';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import HomeScreen from '../screens/HomeScreen/index';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(!isLoading)
    }, 4000)
  }, [])
  if (isLoading){
    return <LoadingScreen/>
  }
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

      {isLoading ? <AuthStackScreen />  : <RootNavigator/>}
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="HomeScreen" component ={HomeScreen} options={{headerShown: false}}/>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const AuthStack = createNativeStackNavigator<RootAuthStack>();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name='SignInScreen' component={SignIn}/>
    <AuthStack.Screen name='SignUpScreen' component={SignUp}/>


  </AuthStack.Navigator>
)

