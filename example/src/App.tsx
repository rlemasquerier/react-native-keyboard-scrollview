import * as React from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { TextInput } from './components/TextInput';
import { ContentCard } from './components/ContentCard';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Example app</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <ContentCard />
        <ContentCard />
        <TextInput />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    padding: 16,
    height: 120,
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
