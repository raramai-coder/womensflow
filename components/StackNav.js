import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Emergency from "./Emergency";
import EmptyBin from "./EmptyBin";
import Reports from "./Reports";
import FirstImage from "./FirstImage";
import SecondImage from "./SecondImage";
import ThirdImage from "./ThirdImage";
import Home from "./Home";


const RStack = createStackNavigator();

const ReportStack = () => {
  return (
    <RStack.Navigator>
      <RStack.Screen name="Reports" component={Reports} />
      <RStack.Screen name="Emergency" component={Emergency} />
      <RStack.Screen name="EmptyBin" component={EmptyBin} />
    </RStack.Navigator>
  );
};

export { ReportStack };

const HStack = createStackNavigator();

const HomeStack = () => {
  return (
    <HStack.Navigator screenOptions={{ headerShown: false }}>
      <HStack.Screen name="Home" component={Home} />
      <HStack.Screen name="FirstI" component={FirstImage} />
      <HStack.Screen name="SecondI" component={SecondImage} />
      <HStack.Screen name="ThirdI" component={ThirdImage} />
    </HStack.Navigator>
  );
};

export { HomeStack };
