import React from 'react';
import { Text, View, TextInput, StyleSheet, Pressable, Image} from 'react-native';

const Donate3 = ({navigation}) => {

        const [text, onChangeText] = React.useState("1");

  return (
    <View>
        <Image source={require('./ThankYou.jpeg')} style={styles.img}/>
      <Text style={styles.h1}>Thank you for donating!</Text>
         <Text style={[styles.h2]}>Every single pad makes a difference x </Text>  
         <Pressable onPress={ () => navigation.navigate("Donate")} style={[styles.canPress]}>
         <Text style={[styles.location1]}>Make Another Donation</Text>  
            </Pressable>
    </View>
  );
}

export default Donate3;

const styles = StyleSheet.create({
    h1: {
      fontSize: 60,
      textAlign: "center",
      marginTop: -500,
      paddingLeft: 15,
      paddingRight: 15,
      marginBottom: 15,
      fontWeight: "bold",
      letterSpacing: 2,
      color: "black",
    },

    h2:{
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: "justify",
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "purple",
    },

    img:{
        width: 400,
        height: 600,
        opacity: 0.3,
    },

    canPress:{
        backgroundColor: '#D0D8FF',
        borderRadius: 10,
        padding: 4,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 250,
      },

      location1:{
        marginLeft: 10,
        fontSize: 15,
        marginTop: 5,
        fontWeight: "bold",
        fontSize: 20,
      },
  
  });