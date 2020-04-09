import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodosContainer from './src/components/TodosContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <TodosContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
