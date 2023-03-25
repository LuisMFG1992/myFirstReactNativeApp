import {
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import WelcomeScreen from "./app/Screens/WelcomeScreen";

export default function App() {
  // return <WelcomeScreen />;
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",
    paddingTop: 200,
  },
});
