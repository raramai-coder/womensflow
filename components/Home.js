import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Animated, useWindowDimensions, Pressable, SafeAreaView } from "react-native";
import colors from "../config/colors";
import FirstImage from "./FirstImage";
import { StatusBar } from "expo-status-bar";

export default function Home({ navigation }) {
  /* const images = [
     { id: 1, img: require("./womansflowLogo.png"), title: "homePage"},
     { id: 2, img: require("./1.png"), title: "image 1" },
     { id: 3, img: require("./2.png"), title: "image 2" },
     { id: 4, img: require("./3.png"), title: "image 3" }
   ]
   function handleSlidder({images}){
   
   let show;
   count = 0;
   for (let i = 0; i < images.length; i++) {
     show = images[i];
     count++;
 
   }
   return show
     
 
   };
   */
  return (

    <View style={styles.container}>

      {<Image source={require('./womansflowLogo.png')} style={styles.img} />}
      <Text style={[styles.h1]}>Welcome to womansflow!</Text>
      <Pressable
        onPress={() => navigation.navigate("FirstI")}
        style={styles.h2}
      >
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEC7C3",
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 55,
    textAlign: "center",
    marginTop: -700,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
    letterSpacing: 2,
    // textTransform: "uppercase",
  },
  h2: {
    fontSize: 55,
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20,
    borderRadius: 20,
    marginLeft: 160,
    marginRight: 10,
    fontWeight: "bold",
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.primaryButton
    // textTransform: "uppercase",
  },
  img: {
    width: 500,
    marginTop: 100,
    opacity: 0.5,
  },

});
