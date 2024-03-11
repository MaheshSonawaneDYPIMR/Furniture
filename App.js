import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import MainStackNav from "./src/navigation/stackNav/MainStackNav";
import OnBoardingStackNav from "./src/navigation/stackNav/OnBoardingStackNav";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator intialRouteName="onBoardingStackNav">
        <Stack.Screen name="OnBoardingStackNav" component={OnBoardingStackNav}options={{ headerShown: false }}/>
        <Stack.Screen name="MainStackNav" component={MainStackNav}options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
