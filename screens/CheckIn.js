import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TextInput} from "react-native";
import { Color, FontSize, Border } from "../GlobalStyles";
import COLORS from "../Constants/colors";
import { Button } from "react-native-paper";
       
const CheckIn = () => {
  return (
    <View style={styles.main}>
      <View style={styles.groupWorkLogo3Parent}>
      </View>
      <Image
        style={styles.mainChild}
        contentFit="cover"
        source={require("../assets/rectangle-52.png")}
      />
      <Text style={[styles.fiestaRoyaleHotel, styles.bookTypo]}>
        Fiesta Royale Hotel
      </Text>
      <Text style={[styles.book]}>Confirm booking details</Text>
      <Text style={[styles.totalCost, styles.totalCostTypo]}>Total Cost</Text>
      <View style={styles.wrapper}>
        <Text style={[styles.text, styles.textTypo]}>$ 350.00</Text>
      </View>
      <View style={[styles.deluxeRoomParent, styles.parentLayout]}>
        <Text style={styles.totalCostTypo}>Deluxe Room</Text>
        <View style={styles.frame}>
          <Text
            style={[styles.arriving15JulyStaying, styles.totalCostTypo]}
          >{`Arriving: 15-July Staying: 1 night`}</Text>
          <Image
            style={styles.calendarIcon}
            contentFit="cover"
            source={require("../assets/calendar.png")}
          />
        </View>
        <View style={styles.frameItem} />
        <View style={[styles.frame1, styles.frameLayout1]}>
          <Text style={[styles.adults3, styles.textTypo]}>Adults : 3</Text>
          <View style={[styles.frame2, styles.frameLayout1]}>
            <Image
              style={[styles.maleAvatarIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/male-avatar.png")}
            />
            <Image
              style={[styles.maleAvatarIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/male-avatar.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.parentLayout]}>
            <Text style={[styles.creditCardDetails, styles.totalCostTypo]}>
              Credit card details
            </Text>
            <View style={{flexDirection: "column", gap: 15, position: "relative"}}>
                <Text style={{top:50, position: "absolute", fontSize:17,left:10}}>Card number</Text>
                <TextInput style={styles.input} placeholder="Enter card number"></TextInput>
                <Text style={{top:100, position: "absolute",fontSize:17,left:10}}>Expiry Date</Text>
                <TextInput style={styles.input} placeholder="Enter expiry date"></TextInput>
                <Text style={{top:150, position: "absolute", fontSize:17, left:10}}>Security code</Text>
                <TextInput style={styles.input} placeholder="Enter security code"></TextInput>
            </View>
            <Button style={styles.button}>Confirm</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 8,
    width: 210,
    left: 130,
    top: 40,
  },
  button: {
    left: 130,
    width: 120,
    backgroundColor: Color.lightsalmon,
    top: 80,
    color: COLORS.black,
  },
  label: {
    position: "absolute",
  },
  bookTypo: {
    textAlign: "center",
    position: "absolute",
    top: 0,
  },
  totalCostTypo: {
    color: Color.black,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
  },
  textTypo: {
    top: 6,
    color: Color.black,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    position: "absolute",
  },
  parentLayout: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lightsalmon,
    position: "absolute",
  },
  frameLayout1: {
    height: 40,
    overflow: "hidden",
  },
  iconLayout: {
    width: 40,
    height: 40,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 53,
    position: "absolute",
    overflow: "hidden",
  },
  groupWorkLogo3: {
    width: 96,
    height: 66,
  },
  groupWorkLogo3Parent: {
    flexDirection: "row",
    alignItems: "center",
    height: 66,
    left: 0,
    top: 0,
    position: "absolute",
  },
  mainChild: {
    top: 0,
    width: "100%",
    height: 786,
    left: 0,
    position: "absolute",
  },
  fiestaRoyaleHotel: {
    marginLeft: -145.5,
    top: 100,
    color: Color.gray_100,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    left: "50%",
    position: "absolute"
  },
  book: {
    top: 49,
    display: "flex",
    justifyContent: "center",
    height: 36,
    left: 0,
    color: COLORS.white,
    fontSize: 18,
    textAlign: "center",
    alignItems: "center",
  },
  totalCost: {
    top: 330,
    left: 105,
    position: "absolute",
  },
  text: {
    marginLeft: -52,
    left: "50%",
  },
  wrapper: {
    top: 320,
    left: 230,
    borderRadius: 20,
    width: 152,
    height: 42,
    backgroundColor: Color.lightsalmon,
    position: "absolute",
  },
  arriving15JulyStaying: {
    left: 56,
    top: 0,
    position: "absolute",
  },
  calendarIcon: {
    top: 3,
    width: 50,
    height: 55,
    left: 0,
    position: "absolute",
  },
  frame: {
    width: 234,
    height: 58,
    marginTop: 9,
    overflow: "hidden",
  },
  frameItem: {
    borderStyle: "solid",
    borderColor: "#d2683b",
    borderTopWidth: 1,
    width: 348,
    height: 1,
    marginTop: 9,
  },
  adults3: {
    left: 68,
  },
  maleAvatarIcon: {
    left: 0,
  },
  maleAvatarIcon1: {
    left: 20,
  },
  frame2: {
    width: 60,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame1: {
    width: 176,
    marginTop: 9,
  },
  deluxeRoomParent: {
    marginLeft: -173.51,
    top: 120,
    paddingHorizontal: 0,
    paddingVertical: 8,
    left: "50%",
  },
  creditCardDetails: {
    left: 80,
    top: 0,
    position: "absolute",
  },
  frame5: {
    width: 130,
    height: 24,
    top: 29,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame4: {
    width: 209,
    left: 0,
    top: 0,
  },
  frame3: {
    left: 0,
    width: 295,
    top: 29,
  },
  rectangleParent: {
    top: 392,
    width: 347,
    height: 201,
    left: 30,
  },
  main: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
});

export default CheckIn;
