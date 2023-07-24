import { Text, View, SafeAreaView, StatusBar, Image } from "react-native";

const MoreScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <Text></Text>
        <Text style={{ color: "white", fontSize: 18 }}>Admin Dashboard</Text>
        <Text style={{ color: "#548", fontSize: 18 }}>Edit</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          marginBottom: 40,
        }}
      >
        <Text style={{ color: "grey", marginLeft: 25, marginBottom: 5 }}>
          PREMIUM
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 8,
            paddingHorizontal: 25,
            backgroundColor: "#222",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#548", fontWeight: "bold", fontSize: 18 }}>
            Remove Advertisement
          </Text>
          <Image
            source={require("../assets/info.png")}
            style={{ width: 25, height: 25 }}
          />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          marginBottom: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            paddingVertical: 8,
            paddingHorizontal: 25,
            backgroundColor: "#222",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomWidth: 0.5,
            borderBottomColor: "#333",
          }}
        >
          <Image
            source={require("../assets/help.png")}
            style={{ width: 25, height: 25, tintColor: "#548" }}
          />
          <Text
            style={{
              color: "#548",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Remove Advertisement
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            paddingVertical: 8,
            paddingHorizontal: 25,
            backgroundColor: "#222",
            borderBottomWidth: 0.5,
            borderBottomColor: "#333",
          }}
        >
          <Image
            source={require("../assets/giftbox.png")}
            style={{ width: 25, height: 25, tintColor: "#548" }}
          />
          <Text style={{ color: "#548", fontWeight: "bold", fontSize: 18 }}>
            Remove Advertisement
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            paddingVertical: 8,
            paddingHorizontal: 25,
            backgroundColor: "#222",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Image
            source={require("../assets/video-player.png")}
            style={{ width: 25, height: 25, tintColor: "#548" }}
          />
          <Text style={{ color: "#548", fontWeight: "bold", fontSize: 18 }}>
            Play Advertisement
          </Text>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 8,
            paddingHorizontal: 25,
            backgroundColor: "#222",
            borderRadius: 10,
            marginBottom: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              alignItems: "center",

              backgroundColor: "#222",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <Image
              source={require("../assets/social-media.png")}
              style={{ width: 25, height: 25, tintColor: "#548" }}
            />
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              Passcode Lock
            </Text>
          </View>
          <Image
            source={require("../assets/greater-than.png")}
            style={{ width: 10, height: 12, tintColor: "grey" }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 8,
            paddingHorizontal: 25,
            backgroundColor: "#222",
            borderRadius: 10,
            marginBottom: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              alignItems: "center",

              backgroundColor: "#222",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <Image
              source={require("../assets/database-configuration.png")}
              style={{ width: 25, height: 25, tintColor: "#548" }}
            />
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              VPN
            </Text>
          </View>
          <Image
            source={require("../assets/greater-than.png")}
            style={{ width: 10, height: 12, tintColor: "grey" }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 8,
            paddingHorizontal: 25,
            backgroundColor: "#222",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              alignItems: "center",

              backgroundColor: "#222",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <Image
              source={require("../assets/turn-off.png")}
              style={{ width: 25, height: 25, tintColor: "#548" }}
            />
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              WI-FI Sharing
            </Text>
          </View>
          <Image
            source={require("../assets/greater-than.png")}
            style={{ width: 10, height: 12, tintColor: "grey" }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MoreScreen;
