import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
  const initialCounter = 0;
  const [count, setCount] = useState(initialCounter);

  const increaseCounter = () => setCount(prevCount => prevCount + 1);

  const decreaseCounter = () =>
    setCount(prevCount => (prevCount > 0 && prevCount - 1) || initialCounter);

  return (
    <View style={styles.container}>
      <Text>Counter</Text>
      <Text>Current Count: {count} </Text>
      <View style={styles.buttons}>
        <Button title="+" onPress={increaseCounter} />
        <Button title="-" onPress={decreaseCounter} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignContent: 'space-around',
    alignSelf: 'center',
  },
  buttons: {
    margin: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
});

export default CounterScreen;
