import * as React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import colors from "../config/colors";

export default function Reports({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={console.log("Pressed report")} style={styles.buttons}>
        <Text style={styles.buttonText}>Report Empty Bin</Text>
      </Pressable>

      <Pressable
        onPress={console.log("Pressed emergency")}
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Emergency Request</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    width: "50%",
    height: "15%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: colors.primaryButton,
    borderRadius: 25,
    borderColor: colors.primaryButtonBorder,
    borderWidth: 2.5,
  },

  buttonText: {
    fontSize: 18,
  },
});
