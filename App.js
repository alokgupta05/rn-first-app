import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
export default function App() {
  


  const renderItem = ({item}) =>(
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
  );

  return (
    <View>
    <View style={styles.container}>
      <TextInput
        placeholder ="Enter Number" 
        style ={styles.textInputLayout}/>
      <Button title = "Add Numbers" />
    </View>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
  item: {
    borderColor: '#0000FF',
    marginVertical: ''
    mar: 1,
    padding: 10,
  },
});
