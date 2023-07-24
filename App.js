
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import SignInComponent from "./screens/SignIn";
import MapScreen from "./screens/MapScreen";
import HotelDetails from "./screens/hotel_details";

export default function App() {
  return (
    <>
    <NavigationContainer>
      <SignInComponent />
      <StatusBar style="auto" />
    </NavigationContainer> 
    </>
  );
}



