import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// Reducer Function
const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increase_count' || 'decrease_count, payload: 1 }
  switch (action.type) {
    case 'increase_count':
      return { ...state, count: state.count + action.payload };
    case 'decrease_count':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: 'increase_count', payload: 1 });
        }}
      ></Button>
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ type: 'decrease_count', payload: 1 });
        }}
      ></Button>
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
