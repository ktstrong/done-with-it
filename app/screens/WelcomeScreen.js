import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

// import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={4}
      style={styles.bground}
      source={require("../assets/bground.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => console.log("Tapped")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("Tapped")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  bground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 80,
    width: 80,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
