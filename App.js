import {
  StatusBar,
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
} from "react-native";

import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/Screens/AccountScreen";
import ListingScreen from "./app/Screens/ListingScreen";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/Screens/LoginScreen";
import ListingEditScreen from "./app/Screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
