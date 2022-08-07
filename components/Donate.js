import * as React from "react";
import { Text, View, StyleSheet, Image, Pressable} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import MapView from "react-native-maps";

const Donate = ({navigation}) => {

const [selected, setSelected] = React.useState("");


const data = [
    {key:'1', value:'OLS 3rd Floor Dispenser 0.9km'},
    {key:'2', value:'WSOA 1st Floor Bathroom 1.2km'},
    {key:'3', value:'Science Stadium Bathroom 4.7km'},
    {key:'4', value:'Law Lawns Dispenser 5.2km'},
    {key:'5', value:'Africa Library Bathroom 10.12km'},
]

  return (
    <View>

      <Text style={styles.h1}>Please select the location of the dispensary in which you have donated the pads: </Text>
            {/* {<Image source={require('./MapsImagePlaceHolder.webp')} style={styles.img}/> } */}

            <MapView
          style={styles.map}
            initialRegion={{
              latitude: -26.1929,
              longitude: 28.0305,
              // latitudeDelta: 0.0922,
              // longitudeDelta: 0.0421,
            }}
        />

            <Text style={[styles.h2]}>Recently visited dispensers: </Text>
            <Pressable onPress={() => {}} style={[styles.notPress]}>
            <Text style={[styles.location1]}>WSOA 1st Floor Bathroom</Text> 
            <Text style={[styles.location2]}>1.2km away</Text> 
            </Pressable>
            <Text style={[styles.h2]}>Search for dispensary: </Text>
        <SelectList data={data} setSelected={setSelected} placeholder="Search for dispenser:" onSelect={() => {}} maxWidth={50} style={[styles.dropdown]}/>
        <Pressable onPress={ () => navigation.navigate("Donate2")} style={[styles.canPress]}>
         <Text style={[styles.location1]}>Next</Text>  
            </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({

  mapView: {
    height: "50%",
    width: "75%",
    //backgroundColor: colors.black,
  },

  map: {
    width: 500,
    height: "20%",
    marginLeft: -50,
  },
  
    h1: {
      fontSize: 20,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 15,
      paddingBottom: 15,
      paddingRight: 10,
      paddingLeft:10,
    },

    body: {
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 10,
        paddingLeft:10,
        paddingTop: 10,
      },

      img:{
        // paddingRight: 10,
        // paddingLeft:20,
        height: 200,
        width: 400,
      },

        h2:{
            fontSize: 25,
            paddingRight: 10,
            paddingLeft:10,
            paddingTop: 10,
            paddingBottom: 10,
            textAlign: "center",
        },

        h3:{
            fontSize: 20,
            paddingRight: 10,
            paddingLeft:10,
            paddingTop: 10,
            paddingBottom: 10,
        },

      dropdown:{
        marginTop: -15,
        width: 10, 
        marginLeft: 20,
        marginBottom: 10,
      },

      location1:{
        marginLeft: 10,
        fontSize: 15,
        marginTop: 5,
        fontWeight: "bold",
      },

      location2:{
        marginLeft: 10,
      },

      locations:{ //would foreach through all locations in the area that have a sanitation bin
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
      },

      filteredLocation:{
        paddingTop:10,
        paddingLeft: 10,
        fontSize: 15,
      },

      canPress:{
        backgroundColor: '#6B6CA9',
        borderRadius: 10,
        padding: 4,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 290,
      },

      notPress:{
        backgroundColor: '#4152E6',
        borderRadius: 10,
        padding: 4,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
      },
  });

  export default Donate;

