import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>meals detail screen works</Text>
      <Button
        title="Go to top"
        onPress={() => {
          props.navigation.popToTop('CategoryMeals');
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

export default MealDetailScreen;
