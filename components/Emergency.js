import * as React from "react";
import { useState } from "react";
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

const DispensersData = [
  {
    id: 1,
    Name: "Wits Matrix Bathroom",
    distance: "0.2km",
    approximateFill: 20,
  },
  {
    id: 2,
    Name: "OLS 3rd Floor Dispenser",
    distance: "0.9km",
    approximateFill: 2,
  },
  {
    id: 3,
    Name: "WSOA 1st Floor Bathroom",
    distance: "1.2km",
    approximateFill: 12,
  },
  {
    id: 4,
    Name: "Science Stadium Bathroom",
    distance: "4.7km",
    approximateFill: 33,
  },
  {
    id: 5,
    Name: "Law Lawns Dispenser",
    distance: "5.2km",
    approximateFill: 13,
  },
  {
    id: 6,
    Name: "Africa Library Bathroom",
    distance: "10.12km",
    approximateFill: 46,
  },
];

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
        <Text style={styles.dispensersHeader}>Dispensers Near Me</Text>
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
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.searchButton}>
            <Text>Search</Text>
          </View>
        </Pressable>
      </View>
      <FlatList
        data={DispensersData}
        renderItem={({ item }) => (
          <Item
            name={item.Name}
            distance={item.distance}
            approxFill={item.approximateFill}
            keyExtractor={(item = item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    //justifyContent: "center",
  },

  dispensersContainer: {
    //backgroundColor: colors.primaryButton,
    alignSelf: "flex-start",
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  dispensersHeader: {
    fontSize: 25,
    textAlign: "left",
    width: 265,
    //backgroundColor: colors.primaryButton,
  },

  dispenserItemContainer: {
    width: "100%",
    //backgroundColor: colors.primaryButton,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },

  mapView: {
    height: "50%",
    width: "75%",
    //backgroundColor: colors.black,
  },

  map: {
    width: "100%",
    height: "100%",
  },

  searchButton: {
    width: 80,
    backgroundColor: colors.primaryButton,
    borderRadius: 25,
    borderColor: colors.primaryButtonBorder,
    borderWidth: 2.5,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
