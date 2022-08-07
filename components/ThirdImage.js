import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../config/colors";

export default function ThirdImage({ navigation }) {
    return (
        <View  style={styles.container}>
        <ScrollView>
             {<Image source={require('./3.png')} style={styles.img} />}
        </ScrollView>
           
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

    h2: {
        fontSize: 20,
        //textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 20,
        borderRadius: 20,
        marginLeft: 160,
        marginRight: 10,
        fontWeight: "bold",
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: colors.primaryButton
        // textTransform: "uppercase",
    },
    img: {
        width: 400,
        height: 800,
        opacity: 0.8,
        margin:5,
        justifyContent:"center"
    },


});