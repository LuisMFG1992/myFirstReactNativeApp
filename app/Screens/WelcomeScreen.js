import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/pexels-maksim-goncharenok-4352247.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text>The new way to buy and sell faster</Text>
      </View>
      <View style={styles.loggin} />
      <View style={styles.logout} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: { width: 150, height: 150 },
  loggin: {
    height: 48,
    width: "100%",
    backgroundColor: "red",
  },
  logout: {
    height: 48,
    width: "100%",
    backgroundColor: "lightgreen",
  },
  logoContainer: {
    position: "absolute",
    top: "20%",
    alignItems: "center",
  },
});

export default WelcomeScreen;
