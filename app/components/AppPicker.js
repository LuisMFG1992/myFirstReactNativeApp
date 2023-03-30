import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  Modal,
  Button,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import { TouchableOpacity } from "react-native";

function AppPicker({ items, icon, placeholder, ...otherProps }) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              color={defaultStyles.colors.medium}
              size={20}
              colors={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name={"chevron-down"}
            color={defaultStyles.colors.medium}
            size={20}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} animationType="slide">
        <Screen>
          <FlatList
            data={items}
            keyExtractor={(element) => element.value}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setIsVisible(false)}>
                <AppText>{item.label}</AppText>
              </TouchableOpacity>
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppPicker;
