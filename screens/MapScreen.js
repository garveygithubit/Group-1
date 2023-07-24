import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import MapComp from "../components/MapComp";
import CardComp from "../components/CardComp";

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
        <Image source={require("../assets/arrow.png")} style={styles.image} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Map</Text>
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
  <TouchableOpacity onPress={() => navigation.navigate('Details')}>
    <FlatList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
      renderItem={() => <CardComp />}
      keyExtractor={(item) => item.name}
      horizontal={true}
    />
  </TouchableOpacity>
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
