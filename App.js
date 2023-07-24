import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import MapScreen from "./screens/MapScreen";

export default function App() {
  return (
    <>
      <MapScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
