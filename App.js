import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BasicSectionList from './components/BasicSectionList';

export default class App extends React.Component {
  render() {
    return (
       <BasicSectionList />
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
