import react, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}> Tarefas </Text>
      <View style={styles.Vermelho}></View>
      <View style={styles.Verde}></View>
      <View style={styles.Azul}></View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Vermelho: {

    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: 'red',
  },
  Verde: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    margin: 10,
  },
  Azul: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    margin: 10,
  }
});


