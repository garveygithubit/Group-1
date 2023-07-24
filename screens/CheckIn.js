import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const CheckIn = () => {
  return (
    <View style={styles.asaresPage}>
      <View style={styles.groupWorkLogo3Parent}>
        <Image
          style={styles.groupWorkLogo3}
          contentFit="cover"
          source={require("../assets/group-work-logo-3.png")}
        />
        <View style={styles.frameChild} />
      </View>
      <Image
        style={styles.asaresPageChild}
        contentFit="cover"
        source={require("../assets/rectangle-52.png")}
      />
      <Text style={[styles.fiestaRoyaleHotel, styles.bookTypo]}>
        Fiesta Royale Hotel
      </Text>
      <Text style={[styles.book, styles.bookTypo]}>3/BOOK</Text>
      <Text style={[styles.totalCost, styles.totalCostTypo]}>Total Cost</Text>
      <View style={styles.wrapper}>
        <Text style={[styles.text, styles.textTypo]}>$ 350.00</Text>
      </View>
      <View style={[styles.deluxeRoomParent, styles.parentLayout]}>
        <Text style={styles.totalCostTypo}>Deluxe Room</Text>
        <View style={styles.frame}>
          <Text
            style={[styles.arriving15JulyStaying, styles.totalCostTypo]}
          >{`Arriving 15-July
Staying 1 night`}</Text>
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
        <View style={styles.frameInner} />
        <View style={[styles.frame3, styles.frameLayout]}>
          <Image
            style={[styles.padlockIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/padlock.png")}
          />
          <View style={[styles.frame4, styles.frameLayout]}>
            <Text style={[styles.creditCardDetails, styles.totalCostTypo]}>
              Credit card details
            </Text>
            <View style={styles.frame5}>
              <Text style={[styles.securePage, styles.bookTypo]}>
                Secure Page
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  totalCostTypo: {
    color: Color.black,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  textTypo: {
    top: 6,
    color: Color.black,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
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
  frameChild: {
    backgroundColor: "#0f0e0c",
    width: 297,
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
  asaresPageChild: {
    top: 66,
    width: 393,
    height: 786,
    left: 0,
    position: "absolute",
  },
  fiestaRoyaleHotel: {
    marginLeft: -145.5,
    top: 158,
    color: Color.gray_100,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    left: "50%",
  },
  book: {
    top: 99,
    display: "flex",
    justifyContent: "center",
    width: 123,
    height: 36,
    left: 22,
    color: Color.gray_100,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
  },
  totalCost: {
    top: 491,
    left: 245,
    position: "absolute",
  },
  text: {
    marginLeft: -52,
    left: "50%",
  },
  wrapper: {
    top: 539,
    left: 227,
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
    top: 225,
    paddingHorizontal: 0,
    paddingVertical: 8,
    left: "50%",
  },
  frameInner: {
    top: 141,
    left: 33,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: "#d9d9d9",
    width: 287,
    height: 19,
    position: "absolute",
  },
  padlockIcon: {
    left: 255,
  },
  creditCardDetails: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  securePage: {
    left: 10,
    fontSize: 20,
    color: "#ff3030",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    top: 0,
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
    left: 26,
    width: 295,
    top: 29,
  },
  rectangleParent: {
    top: 692,
    width: 347,
    height: 161,
    left: 22,
  },
  asaresPage: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default CheckIn;
