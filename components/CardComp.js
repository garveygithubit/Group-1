import { StyleSheet, Text, View, Image, Platform } from "react-native";

const CardComp = ({ hotel = {} }) => {
  const {
    name = "Fiesta Royal Hotel",
    location = "Djorwulu, Accra",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    distance = "3km to city",
    rating = 4.4,
  } = hotel;
  return (
    <View style={[styles.card, Platform.OS === "ios" && styles.shadow]}>
      <Image source={require("../assets/room.png")} style={styles.image} />

      <View style={styles.cardInfo}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
          <Text>{location}</Text>
        </View>
        <View>
          <Text>{distance}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text>{rating}</Text>
            <Image source={require("../assets/star.png")} style={styles.star} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 150,
    backgroundColor: "white",
    flexDirection: "row",
    gap: 20,
    borderRadius: 25,
    elevation: 6,
    marginRight: 15,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  image: {
    width: 120,
    height: 150,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
  },
  cardInfo: {
    padding: 15,
    justifyContent: "space-between",
  },
  star: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});

export default CardComp;
