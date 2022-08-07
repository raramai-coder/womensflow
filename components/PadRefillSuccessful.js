import React from 'react';
import { Text, View, TextInput, StyleSheet, Pressable, Image} from 'react-native';

const PadRefillSuccessful = ({navigation}) => {

        const [text, onChangeText] = React.useState("1");

  return ( //script has to take in parameter, to check whether request was emergency vs notification.
    <View>
        <Image source={require('./ThankYou.jpeg')} style={styles.img}/>
      <Text style={styles.h1}>An anonymous request to refill the selected dispensary has been sent to donars in the area!</Text>
         <Text style={[styles.h2]}>You will be notified when the bin has been refilled :) </Text>  
         <Pressable onPress={ () => navigation.navigate("Reports")} style={[styles.canPress]}>
         <Text style={[styles.location1]}>Report Another Empty Bin</Text>  
            </Pressable>
    </View>
  );
}

export default PadRefillSuccessful;

const styles = StyleSheet.create({
    h1: {
      fontSize: 40,
      textAlign: "center",
      marginTop: -580,
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
        marginTop: 0,
        marginRight: 10,
        marginLeft: 180,
      },

      location1:{
        marginLeft: 10,
        fontSize: 15,
        marginTop: 5,
        fontWeight: "bold",
        fontSize: 20,
      },
  
  });