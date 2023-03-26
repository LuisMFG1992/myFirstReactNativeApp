import React from "react";
import {
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/color";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <View>
          <MaterialCommunityIcons name="close" size={35} color="white" />
        </View>
        <View>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={35}
            color="white"
          />
        </View>
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
    backgroundColor: colors.back,
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
    backgroundColor: colors.green,
  },
  backButton: {
    height: 50,
    width: 50,
    backgroundColor: colors.red,
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
