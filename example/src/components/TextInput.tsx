import React from 'react';
import { TextInput as RNTextInput, StyleSheet, View } from 'react-native';

export const TextInput = () => {
  return (
    <View style={styles.container}>
      <RNTextInput
        style={styles.inputStyle}
        placeholder="type something here"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    width: 200,
    height: 40,
  },
  inputStyle: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
