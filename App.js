import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder ="Enter Number" 
        style ={styles.textInputLayout}/>
      <Button title = "Add Numbers" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline'
  },
  textInputLayout: {
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10,
  },
});
