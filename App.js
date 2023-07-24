
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import SignInComponent from "./screens/SignIn";
import MapScreen from "./screens/MapScreen";
import HotelDetails from "./screens/hotel_details";
import Welcome from "./screens/Welcome";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckIn from "./screens/CheckIn";
import HelpScreen from "./screens/HelpScreen";
import SignUp from "./screens/SignUp";
import MoreScreen from "./screens/MoreScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={MapScreen} />
        <Stack.Screen name="Details" component={HotelDetails} />
        <Stack.Screen name="SignIn" component={SignInComponent} />
        <Stack.Screen name="CheckIn" component={CheckIn} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="More" component={MoreScreen} />
      </Stack.Navigator>
    </NavigationContainer> 
    </>
  );
}



