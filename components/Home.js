import * as React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      {<Image source={require("./womansflowLogo.png")} style={styles.img} />}
      <Text style={[styles.h1]}>Welcome to womansflow!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 50,
    textAlign: "center",
    marginTop: -700,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
    letterSpacing: 2,
    // textTransform: "uppercase",
  },

  img: {
    width: 500,
    marginTop: 100,
    opacity: 0.5,
  },
});
