import { StatusBar, Platform, StyleSheet } from "react-native";

import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screensContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",
  },
});
