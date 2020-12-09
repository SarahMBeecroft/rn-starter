import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Bryan', age: 38 },
    { name: 'Ashley', age: 28 },
    { name: 'Kyle', age: 29 },
    { name: 'Ally', age: 29 },
    { name: 'Diana', age: 31 },
    { name: 'Bryann', age: 38 },
    { name: 'Ashleyn', age: 28 },
    { name: 'Kylen', age: 29 },
    { name: 'Allyn', age: 29 },
    { name: 'Dianan', age: 31 },
    { name: 'Bryannn', age: 38 },
    { name: 'Ashleynn', age: 28 },
    { name: 'Kylenn', age: 29 },
    { name: 'Allynn', age: 29 },
    { name: 'Dianann', age: 31 },
  ];

  return (
    <FlatList
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Name: {item.name}
            {'\n'}
            Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
  },
});

export default ListScreen;
