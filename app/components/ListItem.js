import React from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import { Image, View, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({
  title,
  subtitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
              {subtitle && (
                <AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>
              )}
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
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 45,
  },
  detailsContainer: {
    justifyContent: "center",
    marginLeft: 20,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.medium,
  },
});

export default ListItem;
