import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ContentCard = () => {
  return (
    <View style={styles.container}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    width: 200,
  },
});
