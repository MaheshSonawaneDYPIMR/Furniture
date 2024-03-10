import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from "@react-navigation/native";

import logo from "../../../assets/images/Icon.png";

const Logo = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Screen1');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]); // Ensure useEffect runs only once after the component mounts

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={logo}
        style={{ width: moderateScale(80), height: moderateScale(80) }}
      />
    </View>
  );
};

export default Logo;
