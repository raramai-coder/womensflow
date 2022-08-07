import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Home from "./Home";
import image1 from "./FirstImage";
import image2 from "./SecondImage";
import image3 from "./ThirdImage";

const RStack = createStackNavigator();

const ImageStack = () => {
    return (
        <RStack.Navigator>
            <RStack.Screen name="Home" component={Home} />
            <RStack.Screen name="image1" component={image1} />
            <RStack.Screen name="image2" component={image2} />
            <RStack.Screen name="image3" component={image3} />
        </RStack.Navigator>
    );
};

export { ImageStack };
