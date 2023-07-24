import { Image, StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import HelpBox from "../components/HelpBox";

const HelpScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        <Image source={require("../assets/helpbg.png")} style={styles.image} />
      </View>
      <View style={styles.helpContainer}>
        <HelpBox
          color={"pink"}
          content="Need Help? We're right here Get quick answers, contact
           info and more for this booking with
            our interactive help feature "
        />
        <HelpBox color={"lightblue"} content="What kind of help do you need?" />
        <HelpBox
          color={"lightblue"}
          content="How can I get more info about a room or the Hotel?"
        />
        <HelpBox
          color={"lightblue"}
          content="When do I get a confirmation email?"
        />
        <HelpBox
          color={"lightblue"}
          content="Where do I check my booking details and status?"
        />
        <HelpBox
          color={"lightblue"}
          content="Can you resend the booking voucher to me?"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  helpContainer: {
    flex: 1,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HelpScreen;
