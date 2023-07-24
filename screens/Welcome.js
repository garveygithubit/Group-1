import React, { useEffect } from "react";
import {
    ImageBackground,
    Text,
    View,
    StyleSheet,
    Pressable,
    SafeAreaView,
    StatusBar,
    TouchableOpacity
} from "react-native";
import COLORS from "../Constants/colors";



export default function Welcome({ navigation }) {

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate("SignIn");
        }, 3500); 
    
        return () => clearTimeout(timer);
      }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <View style={{ flex: 1 }} >
                    <ImageBackground
                        style={styles.background_image}
                        source={require("../assets/prime_logo.png")}
                        resizeMode="contain"
                    >
                    </ImageBackground>
                </View> 
                   
                <View style={{marginBottom: 40, gap: 20, justifyContent: "space-around", alignItems: "center"}}>     
                    <Text style={{ color: COLORS.white , fontSize: 20}}  onPress={() => navigation.navigate('SignIn')}>DEVELOPED BY</Text>
                    <Text style={{ color: COLORS.white,fontSize: 20 }}>PRIME SOFTWARES</Text>
                </View>  
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    background_image: {
        flex: 1, // Ensure the ImageBackground takes full height of its parent
        alignItems: "center",
        justifyContent: "center",
        marginTop: 90
    },
});
