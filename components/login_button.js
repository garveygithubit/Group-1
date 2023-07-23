import React from "react";
import COLORS from "../Constants/colors";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Login_Button() {
  return (
    <>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text
          style={{
            fontSize: 25,
            color: COLORS.white,
          }}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.blue,
    height: 45,
    width: 250,
    borderRadius: 20,
  },
});
