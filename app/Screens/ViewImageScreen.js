import React from "react";
import {
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <View style={styles.nextButton}></View>
        <View style={styles.backButton}></View>
      </View>
      <ImageBackground
        style={styles.imagerDisplay}
        source={require("../assets/dinner-table.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",
  },
  imagerDisplay: {
    flex: 0.7,
    width: "100%",
  },
  nextButton: {
    height: 50,
    width: 50,
    backgroundColor: "green",
  },
  backButton: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  buttonsContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    padding: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ViewImageScreen;
