import React from 'react';
import { Button, FlatList, StyleSheet, View, Text } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = itemData => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};
const CategoriesScreen = props => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      renderItem={renderGridItem}
      data={CATEGORIES}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
