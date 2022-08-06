import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Emergency from "./Emergency";
import EmptyBin from "./EmptyBin";
import Reports from "./Reports";

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
