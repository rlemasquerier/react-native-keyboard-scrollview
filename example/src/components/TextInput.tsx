import React from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  View,
  type TextInputProps,
} from 'react-native';

export const TextInput = (props: TextInputProps) => {
  return (
    <View style={styles.container}>
      <RNTextInput
        style={styles.inputStyle}
        placeholder="type something here"
        {...props}
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
