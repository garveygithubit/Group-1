import React from "react";
import {
  ImageBackground,
  TextInput,
  Text,
  Image,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import COLORS from "../Constants/colors";
import R_Button from "../components/radio_button";
import Login_Button from "../components/login_button";

export default function SignInComponent() {
  return (
    <>
      <ImageBackground
        style={styles.background_image}
        source={require("../assets/loginbg_image.png")}
        resizeMode="cover"
      >
        <View style={styles.backgroundShadow} />
        <View style={styles.form}>
          <Text
            style={{
              fontSize: 45,
              fontWeight: 400,
              marginTop: 10,
            }}
          >
            Log In
          </Text>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />

          <View
            style={{
              width: "65%",
            }}
          >
            <R_Button label="remember me" />
          </View>
          <Login_Button />
          <Pressable>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              Forgot Password?
            </Text>
          </Pressable>

         
         
        </View>
        <View
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Don't have an account?
          </Text>
          <Pressable>
            <Text
              style={{
                fontWeight: 100,
              }}
            >
              Signup
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background_image: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
  },
  backgroundShadow: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    backgroundColor: COLORS.shadow,
  },
  form: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 700,
    width: "90%",
  },
  input: {
    height: 45,
    width: 250,
    borderRadius: 20,
    backgroundColor: COLORS.grey,
    paddingLeft: 90,
  },
});
