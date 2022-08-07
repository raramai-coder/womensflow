import React from 'react';
import { Text, View } from 'react-native';
import colors from '../config/colors';

const Donate = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.background, fontSize: "150%" }}>
      <Text>
        Donate!
      </Text>
    </View>
  );
}

export default Donate;
