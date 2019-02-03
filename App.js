import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DmFlatList from './components/DmFlatList';

export default class App extends React.Component {
  render() {
    return (
       <DmFlatList />
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
