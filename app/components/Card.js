import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, userName, itemImage, numberOfListings }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={itemImage} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </View>

      {/* <View style={styles.user}>
        <Image
          style={styles.userImage}
          source={require("../assets/cass.png")}
        />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userListings}>{numberOfListings} Listings</Text>
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 20,
  },
  image: {
    height: 300,
    weight: 600,
  },
  detailsContainer: {
    padding: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
  user: {
    margin: 20,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: "90%",
  },
  userListings: {
    fontSize: 12,
    color: "grey",
    fontWeight: 300,
  },
  userName: {
    fontSize: 15,
    fontWeight: 600,
  },
});

export default Card;
