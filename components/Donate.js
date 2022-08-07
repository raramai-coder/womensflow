import * as React from "react";
import { Text, View, StyleSheet, Image, Pressable} from 'react-native';
import SelectList from 'react-native-dropdown-select-list'

const Donate = () => {

const [selected, setSelected] = React.useState("");

const data = [
    {key:'1', value:'within 5km'},
    {key:'2', value:'within 10km'},
    {key:'3', value:'within 15km'},
    {key:'4', value:'within 20km'},
]

  return (
    <View>

      <Text style={styles.h1}>Please select the location of the sanitary bin you have added the pads to: </Text>
            {<Image source={require('./MapsImagePlaceHolder.webp')} style={styles.img}/> }
            <Text style={[styles.h2]}>Recently visited sanitary donation points: </Text>
            <Text style={[styles.locations]}>- 14 Streatley Avenue, Auckland Park</Text> 
            <Text style={[styles.h3]}>Sanitary bins: </Text>
        <SelectList data={data} setSelected={setSelected} placeholder="Choose Distance" maxWidth={50} style={[styles.dropdown]}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
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
            fontSize: 22,
            paddingRight: 10,
            paddingLeft:10,
            paddingTop: 10,
            paddingBottom: 10,
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
      },

      locations:{ //would foreach through all locations in the area that have a sanitation bin
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
      }
  });

  export default Donate;

  //20