import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
 
} from "react-native";
import MapComp from "../components/MapComp";
import CardComp from "../components/CardComp";
import COLORS from "../Constants/colors";

const MapScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View
        style={{
          paddingHorizontal: 30,
          paddingTop: 18,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" , marginLeft:-20, color: COLORS.blue}} onPress={()=> navigation.navigate("Help")}>Need help?</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" , marginLeft:-20 }}>Map</Text>
        <Image
          source={require("../assets/burger-menu.png")}
          style={styles.image}
        />
      </View>
      <View style={{ padding: 16 }}>
        <Searchbar />
      </View>
      <View style={styles.container}>
        <MapComp />
      </View>
      <View style={styles.cards}>
  
    <FlatList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
      renderItem={() => <CardComp />}
      keyExtractor={(item) => item.name}
      horizontal={true}
    />
 
</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cards: {
    position: "absolute",
    bottom: "5%",
    left: "4%",
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default MapScreen;
