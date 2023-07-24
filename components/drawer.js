import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {/* <Drawer.Screen name="Home" component={HomePage} />
         */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
