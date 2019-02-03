import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DmTextInput from './components/DmTextInput';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DmTextInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
