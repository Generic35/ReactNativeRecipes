import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      f<Text>ilters screen works</Text>
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

export default FiltersScreen;
