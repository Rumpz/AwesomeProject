import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

const ColourScreen = () => {
  const [colours, setColours] = useState([]);

  const addColour = () => setColours([...colours, randomRGB()]);
  const resetColour = () => setColours([randomRGB()]);

  return (
    <View>
      <Button title="Add a colour" onPress={addColour} />
      <Button title="Reset colours" onPress={resetColour} />

      <FlatList
        keyExtractor={item => item}
        data={colours}
        renderItem={({item}) => {
          return <View style={styles.container(item)} />;
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  container: item => ({
    height: 100,
    width: 100,
    backgroundColor: item,
  }),
});

export default ColourScreen;
