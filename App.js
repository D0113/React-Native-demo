import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DmScrollview from './components/DmScrollview';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <DmScrollview />
      </View>
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
