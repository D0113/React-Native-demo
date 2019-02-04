import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HorizontalFlatList from './components/HorizontalFlatList';

export default class App extends React.Component {
  render() {
    return (
       <HorizontalFlatList />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
