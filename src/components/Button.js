import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateScaleVertical,
} from "react-native-size-matters";
const Button = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[
       
       { height: moderateScale(55),
        width: '100%',
        borderRadius: moderateScale(17),
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",

        backgroundColor: "#FCD240"},
        props.style
        
      ]}
    >
      <Text style={{ fontSize: 20, fontWeight: "600" }}>{props.label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
