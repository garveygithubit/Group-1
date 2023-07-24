import { View, Text, StyleSheet } from "react-native";

const HelpBox = ({ color, content }) => {
  return (
    <View style={[styles.container, { backgroundColor: `${color}` }]}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingVertical: 25,
    padding: 15,
    marginBottom: 20,
  },
});

export default HelpBox;
