import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ItemScreen from "./ViewImageScreen";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale!",
    subTitle: "100",
    itemImage: require("../assets/redJacket.jpeg"),
  },
  {
    id: 2,
    title: "Graphic basball cap",
    subTitle: "15",
    itemImage: require("../assets/hat.jpeg"),
  },
  {
    id: 3,
    title: "Black bomber jacket",
    subTitle: "35",
    itemImage: require("../assets/bomber.jpeg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"£" + item.subTitle}
            itemImage={item.itemImage}
          />
        )}
      />

      {/* This will render all the list items */}
      {/* it will be with a screen view */}
      {/* The list items will be touchable components */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: colors.white,
  },
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
