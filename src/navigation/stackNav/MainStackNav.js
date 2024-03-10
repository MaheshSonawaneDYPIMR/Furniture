import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import MainScreen from '../../screens/Main/MainScreen';

const Stack = createStackNavigator();


const MainStackNav = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default MainStackNav