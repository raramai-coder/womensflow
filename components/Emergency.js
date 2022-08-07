import * as React from "react";
import { useState } from "react";
import SelectList from 'react-native-dropdown-select-list';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Modal,
  Alert,
  FlatList,
} from "react-native";
import MapView from "react-native-maps";

import colors from "../config/colors";



// const DispensersData = [
//   {
//     id: 1,
//     Name: "Wits Matrix Bathroom",
//     distance: "0.2km",
//     approximateFill: 20,
//   },
//   {
//     id: 2,
//     Name: "OLS 3rd Floor Dispenser",
//     distance: "0.9km",
//     approximateFill: 2,
//   },
//   {
//     id: 3,
//     Name: "WSOA 1st Floor Bathroom",
//     distance: "1.2km",
//     approximateFill: 12,
//   },
//   {
//     id: 4,
//     Name: "Science Stadium Bathroom",
//     distance: "4.7km",
//     approximateFill: 33,
//   },
//   {
//     id: 5,
//     Name: "Law Lawns Dispenser",
//     distance: "5.2km",
//     approximateFill: 13,
//   },
//   {
//     id: 6,
//     Name: "Africa Library Bathroom",
//     distance: "10.12km",
//     approximateFill: 46,
//   },
// ];

function Item({ name, distance, approxFill }) {
  return (
    <View style={styles.dispenserItemContainer}>
      <Text>{name}</Text>
      <Text>{distance}</Text>
      <Text>{approxFill}</Text>
    </View>
  );
}

export default function Emergency({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    {key:'1', value:'OLS 3rd Floor Dispenser 0.9km'},
    {key:'2', value:'WSOA 1st Floor Bathroom 1.2km'},
    {key:'3', value:'Science Stadium Bathroom 4.7km'},
    {key:'4', value:'Law Lawns Dispenser 5.2km'},
    {key:'5', value:'Africa Library Bathroom 10.12km'},
  ]
  
  const [selected, setSelected] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapView}>
        <MapView
          style={styles.map}
          //   initialRegion={{
          //     latitude: -26.1929,
          //     longitude: 28.0305,
          //     // latitudeDelta: 0.0922,
          //     // longitudeDelta: 0.0421,
          //   }}
        />
      </View>
      <View style={styles.dispensersContainer}>
        <Text style={styles.dispensersHeader}>Dispensaries Near Me:</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Search Closed");
            setModalVisible(!modalVisible);
          }}
        >
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.searchButton}>
              <Text>Cancel</Text>
            </View>
          </Pressable>
        </Modal>

        {/* <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.searchButton}>
            <Text>Search</Text>
          </View>
        </Pressable> */}

<SelectList data={data} setSelected={setSelected} placeholder="Request refill for empty dispensary:" onSelect={() => {}} maxWidth={50} style={[styles.dropdown]}/>

<Pressable onPress={ () => {}} style={[styles.canPress]}>
         <Text style={[styles.location1]}>Open in Maps</Text>  
            </Pressable>

            <Pressable onPress={ () => {navigation.navigate("EmptyBin")}} style={[styles.canPress]}>
         <Text style={[styles.location1]}>Search empty dispensaries near me</Text>  
            </Pressable>

      </View>
      <FlatList
        // data={DispensersData}
        // renderItem={({ item }) => (
        //   <Item
        //     name={item.Name}
        //     distance={item.distance}
        //     approxFill={item.approximateFill}
        //     keyExtractor={(item = item.id)}
        //   />
        // )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    textAlign: "center",
    //justifyContent: "center",
  },

  dispensersContainer: {
    //backgroundColor: colors.primaryButton,
    textAlign: "center",
    // alignSelf: "flex-start",
    padding: 20,
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "space-between",
  },

  dispensersHeader: {
    textAlign: "center",
    fontSize: 25,
    // width: 265,
    paddingBottom: 15,
    fontWeight: "bold",
    //backgroundColor: colors.primaryButton,
  },

  // dispenserItemContainer: {
  //   // width: "100%",
  //   //backgroundColor: colors.primaryButton,
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   justifyContent: "space-between",
  //   padding: 20,
  // },

  mapView: {
    height: "50%",
    width: "75%",
    //backgroundColor: colors.black,
  },

  map: {
    width: 500,
    height: "100%",
    marginLeft: -50,
  },

  // searchButton: {
  //   width: 80,
  //   backgroundColor: colors.primaryButton,
  //   borderRadius: 25,
  //   borderColor: colors.primaryButtonBorder,
  //   borderWidth: 2.5,
  //   height: 30,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  location1:{
    marginLeft: 10,
    fontSize: 15,
    marginTop: 5,
    fontWeight: "bold",
  },

  canPress:{
    backgroundColor: '#6B6CA9',
    borderRadius: 10,
    padding: 4,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 200,
  },
});
