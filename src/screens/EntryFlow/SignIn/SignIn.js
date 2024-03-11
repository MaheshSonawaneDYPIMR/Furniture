import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { moderateScale } from "react-native-size-matters";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../../components/Button";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const SignIn = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleSignIn = (email, password) => {
    console.log(email);
    console.log(password);
  };

  const handleGooglePressed = () => {
    console.log("Google Pressed");
  };

  const handleMetaPressed = () => {
    console.log("Meta Pressed");
  };

  console.log(isFocused);

  return (
    <View  style={{ margin: moderateScale(20), marginTop: moderateScale(90) }}>
      <KeyboardAvoidingView>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "500" }}>Hi there!</Text>
          <Text style={{ fontSize: 16, fontWeight: "400", color: "#A4A4A4" }}>
            Welcome back, Sign in to your account
          </Text>
        </View>
        <View style={{ marginTop: moderateScale(40) }}>
          <View
            style={[
              {
                height: moderateScale(55),
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F9FAFB",
                borderRadius: 14,
                marginBottom: moderateScale(20),
                marginTop: moderateScale(10),
              },
              isFocused && {
                borderWidth: 0.8,
                borderColor: "lightgray",
              },
            ]}
          >
            <View
              style={{
                marginLeft: moderateScale(10),
                marginRight: moderateScale(10),
              }}
            >
              <Fontisto name="email" size={22} color="#a4a4a4" />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <TextInput
                value={email}
                onChangeText={(newEmail) => setEmail(newEmail)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                  flex: 1,
                  position: "relative",
                  fontSize: 16,
                  zIndex: 0,
                  height: "100%",
                }}
                caretHidden={true}
              />
              {email == "" && (
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#a4a4a4",
                  }}
                >
                  Email
                </Text>
              )}
            </View>
          </View>
          <View
            style={[
              {
                height: moderateScale(55),
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F9FAFB",
                borderRadius: 14,
                marginBottom: moderateScale(20),
                marginTop: moderateScale(10),
              },
              isFocused && {
                borderWidth: 0.8,
                borderColor: "lightgray",
              },
            ]}
          >
            <View
              style={{
                marginLeft: moderateScale(10),
                marginRight: moderateScale(10),
              }}
            >
              <AntDesign name="lock" size={22} color="#a4a4a4" />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <TextInput
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={showPassword}
                style={{
                  flex: 1,
                  position: "relative",
                  fontSize: 16,
                  zIndex: 0,
                  height: "100%",
                }}
                caretHidden={true}
              />
              {password == "" && (
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#a4a4a4",
                  }}
                >
                  Password
                </Text>
              )}
            </View>

            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={{
                marginLeft: moderateScale(10),
                marginRight: moderateScale(10),
              }}
            >
              <Feather
                name={showPassword ? "eye-off" : "eye"}
                size={22}
                color="#a4a4a4"
              />
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Forgot Password?
          </Text>
        </View>
        <View style={{ marginTop: moderateScale(50) }}>
          <Button
            label={"Sign in"}
            onPress={() => handleSignIn(email, password)}
          />
        </View>
        </KeyboardAvoidingView>
        <View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: moderateScale(40),
              }}
            >
              <View
                style={{
                  borderWidth: 0.3,
                  height: moderateScale(0.2),
                  flex: 1,
                  borderColor: "#c2c2c2",
                }}
              />
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#c2c2c2" }}
              >
                OR
              </Text>
              <View
                style={{
                  borderWidth: 0.3,
                  height: moderateScale(0.2),
                  flex: 1,
                  borderColor: "#c2c2c2",
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                onPress={handleGooglePressed}
                style={{
                  height: moderateScale(55),
                  flex: 1,
                  marginRight: moderateScale(20),
                  borderWidth: 0.8,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 14,
                  borderColor: "#c2c2c2",
                }}
              >
                <AntDesign name="google" size={34} color="black" />
              </Pressable>
              <Pressable
                onPress={handleMetaPressed}
                style={{
                  height: moderateScale(55),
                  flex: 1,

                  borderWidth: 0.8,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 14,
                  borderColor: "#c2c2c2",
                }}
              >
                <FontAwesome6 name="meta" size={34} color="black" />
              </Pressable>
            </View>
          </View>
          <Pressable
            onPress={() => navigation.navigate("SignUp")}
            style={{
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              marginTop: moderateScale(40),
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#a4a4a4" }}>
              Don’t have an account?
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#000000" }}>
              {" "}
              Sign up
            </Text>
          </Pressable>
        </View>
     
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
