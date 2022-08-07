import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Emergency from "./Emergency";
import EmptyBin from "./EmptyBin";
import Reports from "./Reports";
import Donate from "./Donate";
import Donate2 from "./Donate2";

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

const DStack = createStackNavigator();

const DonateStack = () => {
  return (
    <DStack.Navigator>
      <DStack.Screen name="Donate" component={Donate} />
      <DStack.Screen name="Donate2" component={Donate2} />
    </DStack.Navigator>
  );
};

export { DonateStack };


