import React from 'react';
import { Text, View, TextInput, StyleSheet} from 'react-native';

const Donate2 = () => {

        const [text, onChangeText] = React.useState("Number of  pads");

  return (
    <View>
      <Text style={styles.h1}>How many pads did you donate?</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

export default Donate2;

const styles = StyleSheet.create({
    h1: {
      flex: 1,
      fontSize: "150%",
      alignItems: "center",
      justifyContent: "center",
    },

    body: {
        flex: 1,
        fontSize: "100%",
        alignItems: "center",
        justifyContent: "justify",
      },


    input:{

    }
  });