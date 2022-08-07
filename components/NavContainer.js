import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import Donate from "./Donate";
import FAQ from "./FAQ";
import Home from "./Home";
import { ReportStack , DonateStack} from "./StackNav";
import colors from "../config/colors";

//ScreenNames
const homeName = "Home";
const DonateName = "Donate";
const FAQName = "FAQ";
const ReportName = "Report";

const Tab = createBottomTabNavigator();

export default function NavContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === FAQName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === ReportName) {
              iconName = focused ? "settings" : "settings-outline";
            } else if (rn === DonateName) {
              iconName = focused ? "settings" : "settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primaryButton,
          tabBarInactiveTintColor: colors.background,
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={FAQName} component={FAQ} />
        <Tab.Screen name={ReportName} component={ReportStack} />
        <Tab.Screen name={DonateName} component={DonateStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
