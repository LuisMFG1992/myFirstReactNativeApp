import { StatusBar, Platform, StyleSheet, Text, View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";

import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import ListingDetailsScreen from "./app/Screens/ListingDetailedScreen";
import ListItem from "./app/components/ListItem";
import MessegesScreen from "./app/Screens/MessegesScreen";

export default function App() {
  return <MessegesScreen />;
}

const styles = StyleSheet.create({
  screensContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",
  },
});
