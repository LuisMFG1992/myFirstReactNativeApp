import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/color";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/pexels-maksim-goncharenok-4352247.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>The new way to buy and sell faster!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"Log In"} color="primary" />
        <AppButton title={"Register"} color="secundary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  logo: { width: 150, height: 150 },
  loggin: {
    height: 48,
    width: "100%",
    backgroundColor: colors.red,
  },
  logout: {
    height: 48,
    width: "100%",
    backgroundColor: colors.green,
  },
  logoContainer: {
    position: "absolute",
    top: "20%",
    alignItems: "center",
  },
  tagline: {
    paddingTop: 10,
    fontSize: 20,
  },
});

export default WelcomeScreen;
