import React from 'react';
import { Text, View, TextInput, StyleSheet, Pressable} from 'react-native';

const Donate2 = ({navigation}) => {

  const [text, onChangeText] = React.useState("1");

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>How many pads did you donate?</Text>
      <TextInput
        style={styles.input}
        keyboardType = 'numeric'
        placeholder='1'
        onChangeText={onChangeText}
        value={text}
      />
         <Pressable onPress={ () => {navigation.navigate("Donate3")}} style={[styles.canPress]}>
         <Text style={[styles.location1]}>Enter</Text>  
            </Pressable>
    </View>
  );
}


export default Donate2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEC7C3",
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
  },

  body: {
      flex: 1,
      fontSize: 25,
      alignItems: "center",
      justifyContent: "justify",
    },


  input:{
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    fontSize: 25,
  },

  canPress:{
    backgroundColor: '#6B6CA9',
    borderRadius: 10,
    padding: 4,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 280,
    fontSize: 40,
    alignItems: "center",
  },

  location1:{
    marginRight: 0,
    fontSize: 25,
    marginTop: 5,
    fontWeight: "bold",
  },
});
