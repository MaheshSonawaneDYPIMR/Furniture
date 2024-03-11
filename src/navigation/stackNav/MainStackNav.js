import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import SignIn from '../../screens/EntryFlow/SignIn/SignIn';
import SignUp from '../../screens/EntryFlow/SignUP/SignUp';

const Stack = createStackNavigator();


const MainStackNav = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name="SighIn" component={SignIn} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default MainStackNav