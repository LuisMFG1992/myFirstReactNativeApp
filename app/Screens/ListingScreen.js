import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/color";

const Listing = [
  {
    id: 1,
    title: "Dinner Table",
    price: 100,
    image: require("../assets/dinner-table.jpg"),
  },
  {
    id: 2,
    title: "Lamp",
    price: 50,
    image: require("../assets/lamp.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={Listing}
        keyExtractor={(element) => element.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
