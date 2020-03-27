import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>categories screen works</Text>
      <Button
        title="Go to meals!"
        onPress={() => {
          props.navigation.navigate('CategoryMeals');
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

export default CategoriesScreen;
