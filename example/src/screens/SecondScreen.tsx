import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { KeyboardScrollView } from '@rlemasquerier/react-native-keyboard-scrollview';

import { TextInput } from '../components/TextInput';
import { ContentCard } from '../components/ContentCard';

export const SecondScreen = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Example app</Text>
      </View>
      <KeyboardScrollView
        contentContainerStyle={styles.container}
        additionalScrollHeight={20}
      >
        <ContentCard />
        <ContentCard />
        <TextInput />
      </KeyboardScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexGrow: 1,
  },
  header: {
    justifyContent: 'center',
    padding: 16,
    height: 120,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 24,
  },
  container: {
    padding: 16,
    alignItems: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
