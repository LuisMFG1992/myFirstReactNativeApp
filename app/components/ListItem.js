import React from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import { Image, View, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import colors from "../config/color";
import AppText from "./AppText";

function ListItem({ title, subtitle, image, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 45,
    marginRight: 20,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.medium,
  },
});

export default ListItem;
