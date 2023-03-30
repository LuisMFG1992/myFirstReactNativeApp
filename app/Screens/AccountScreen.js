import React from "react";

import { View, StyleSheet, FlatList } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

const manuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messeges",
    icon: {
      name: "email",
      backgroundColor: colors.secundary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View>
        <ListItem
          title="Victoria Smith"
          subtitle="VictoriaSmith@gmail.com"
          image={require("../assets/profilePic.jpg")}
        />
      </View>
      <View style={styles.detailsContainer}>
        <FlatList
          data={manuItems}
          keyExtractor={(element) => element.title}
          ItemSeparatorComponent={<ListItemSeparator />}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f9f6f7",
  },
  detailsContainer: {
    marginVertical: 20,
  },
});

export default AccountScreen;
