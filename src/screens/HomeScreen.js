import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={[{ width: '90%', margin: 10, alignItems: 'center' }]}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        color='darkblue'
        title='Go to Components Demo'
        onPress={() => props.navigation.navigate('Components')}
      ></Button>
      <Button
        title='Go to Lists Demo'
        onPress={() => props.navigation.navigate('List')}
      ></Button>
      <Button
        color='darkcyan'
        title='Go to Image Demo'
        onPress={() => props.navigation.navigate('Image')}
      ></Button>
      <Button
        color='turquoise'
        title='Go to Counter Demo'
        onPress={() => props.navigation.navigate('Counter')}
      ></Button>
      <Button
        color='darkturquoise'
        title='Go to Colors Demo'
        onPress={() => props.navigation.navigate('Colors')}
      ></Button>
      <Button
        color='darkblue'
        title='Go to Squares Demo'
        onPress={() => props.navigation.navigate('Square')}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
