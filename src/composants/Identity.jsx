import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Identity(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.firstName} {props.lastName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
