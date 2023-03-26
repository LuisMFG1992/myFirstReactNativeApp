import { StatusBar, Platform, StyleSheet, Text, View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";

import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";

export default function App() {
  return (
    <View style={styles.screensContainer}>
      <ViewImageScreen />
    </View>
    // <View style={[styles.screensContainer, { backgroundColor: "#f8f4f4", flex: 1 }]}>
    //   <Card
    //     title={"Hey"}
    //     subtitle={"How are you?"}
    //     image={require("./app/assets/pexels-malte-luk-2244746.jpg")}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  screensContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",
  },
});
