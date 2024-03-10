import React from 'react';
import { CardStyleInterpolators, TransitionSpecs, createStackNavigator } from '@react-navigation/stack';

import Logo from '../../screens/onBoarding/Logo';
import Screen1 from '../../screens/onBoarding/Screen1';
import Screen2 from '../../screens/onBoarding/Screen2';
import Screen3 from '../../screens/onBoarding/Screen3';



const Stack = createStackNavigator();

const OnBoardingStackNav = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      gestureEnabled: true,
      TransitionSpecs:{
            open: TransitionSpecs.SlideFromRightIOS,
            close: TransitionSpecs.SlideFromLeftIOS
      },
      cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
    }
    }
    >
      <Stack.Screen name="Logo" component={Logo} options={{ headerShown: false }} />
      <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
      <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
      <Stack.Screen name="Screen3" component={Screen3} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default OnBoardingStackNav;
