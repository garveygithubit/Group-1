
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignInComponent from "./screens/SignIn";
import MapScreen from "./screens/MapScreen";
import HotelDetails from "./views/hotel_details";

export default function App() {
  return (
    <View style={styles.container}>
      <SignInComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

