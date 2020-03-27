import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>category meals screen</Text>
      <Button
        title="Go to meal detail!"
        onPress={() => {
          props.navigation.navigate('MealDetail');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
