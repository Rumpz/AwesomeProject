import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {counterSlice} from '../redux/slices';
const {increment, decrement} = counterSlice.actions;

const CounterScreen = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <View style={styles.container}>
      <Text>Counter</Text>
      <Text>Current Count: {counter} </Text>
      <View style={styles.buttons}>
        <Button title="+" onPress={() => dispatch(increment())} />
        <Button title="-" onPress={() => dispatch(decrement())} />
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

const mapStateToProps = state => ({
  ...state.counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterScreen);
