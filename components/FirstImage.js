import * as React from "react";
import { View, Text, StyleSheet, Pressable,Image,ScrollView } from "react-native";
import colors from "../config/colors";

export default function FirstImage({ navigation }) {
    return (
        <View style={styles.container}>
        <ScrollView>
            {<Image source={require('./1.png')} style={styles.img} />}
            <Pressable
                onPress={() => navigation.navigate("SecondI")}
                style={styles.h2}
            >
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>
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
        fontSize: 35,
        fontWeight: "bold",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 20,
        borderRadius: 20,
        marginLeft: 160,
        marginRight: 10,
        fontWeight: "bold",
        paddingTop: 20,
        paddingLeft: 10,
        backgroundColor: colors.primaryButton
        // textTransform: "uppercase",
    },
    img: {
        width: 400,
        height: 800,
        opacity: 0.8,
        margin: 5,
        justifyContent: "center"
    }


});