import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationContainer from "./components/NavContainer";

// export default function App() {

//   // return (
//   //   <View style={styles.container}>
//   //     <Text>Open up App.js to start working on your app!</Text>
//   //     <StatusBar style="auto" />
//   //   </View>
//   // );
// }

function App() {
  return <NavigationContainer />;
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
