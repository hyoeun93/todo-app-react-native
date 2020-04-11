import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducers from './src/reducers/todoReducers'
import { StyleSheet, Text, View } from 'react-native';
import TodosContainer from './src/components/TodosContainer';

// const store = createStore(reducers)
const store = createStore(todoReducers, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider style={styles.container} store={store}>
      <TodosContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
