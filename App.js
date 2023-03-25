import {
  // StatusBar,
  // Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";

// import ViewImageScreen from "./app/Screens/ViewImageScreen";
import WelcomeScreen from "./app/Screens/WelcomeScreen";

export default function App() {
  return (
    <Card
      title={"Hey"}
      subtitle={"How are you?"}
      image={require("./app/assets/pexels-malte-luk-2244746.jpg")}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",
