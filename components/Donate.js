import * as React from "react";
import { Text, View, StyleSheet } from 'react-native';

const Donate = () => {
  return (
    <View style={styles.body}>
      {/* <Image source={require('./MapsImagePlaceHolder.webp')} />  */}
      <Text style={styles.body}>Please select the location of the sanitary bin you have added the pads to</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    // h1: {
    //   flex: 1,
    //   fontSize: 80,
    //   alignItems: "center",
    //   justifyContent: "center",
    //   fontWeight: "bold",
    // },

    body: {
        flex: 1,
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 5,
        paddingLeft:5,
        paddingTop: 10,
      },
  });

  export default Donate;