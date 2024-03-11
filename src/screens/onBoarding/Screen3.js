import React from "react";
import { View, Dimensions, Image, Text, Pressable } from "react-native";

import Chair from "../../../assets/images/S3Chair.png";
import {
  moderateScale,
  moderateScaleVertical,
} from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#4F9FA4",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: moderateScale(90),
          left: moderateScale(25),
        }}
      >
        <Text
          style={{
            fontSize: 34,
            fontWeight: "600",
          }}
        >
          New designs{"\n"}
          everyday
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: "#F9FAFB",
            marginTop: moderateScale(20),
          }}
        >
          Shopee adds new designs every day. Explore and find {"\n"} the best
          furniture for ypur home and offices.
        </Text>
        <View style={{ flexDirection: "row", marginTop: moderateScale(15) }}>
          <View
            style={{
              height: moderateScale(12),
              width: moderateScale(12),
              backgroundColor: "#F9FAFB",
              borderRadius: moderateScale(6),
            }}
          />
          <View
            style={{
              height: moderateScale(12),
              width: moderateScale(12),
              backgroundColor: "#F9FAFB",
              borderRadius: moderateScale(6),
              marginHorizontal: moderateScale(8),
            }}
          />

          <View
            style={{
              height: moderateScale(12),
              width: moderateScale(12),

              backgroundColor: "yellow",
              borderRadius: moderateScale(6),
            }}
          />
        </View>
      </View>

      <Image
        source={Chair}
        style={{
          width: moderateScale(350),
          height: moderateScale(300),
          alignSelf: "center",
          position: "absolute",
          bottom: moderateScale(70),
        }}
      />
      <LinearGradient
        colors={["transparent", "black"]}
        style={{
          height: "70%",
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <Button
        onPress={() => {
          navigation.navigate("MainStackNav");
        }}
        label={"Get Started"}
        style={{
          position: "absolute",
          left: "center",
          right: "center",
          bottom: moderateScale(60),
        }}
      />
    </View>
  );
};

export default Screen1;
