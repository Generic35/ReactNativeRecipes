import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Button,
  Text,
  StyleSheet
} from 'react-native';

const CategoryGridTile = props => {
  let Component = TouchableOpacity;

  if (Platform.OS === 'android') {
    Component = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <Component style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </Component>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 20,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }
});

export default CategoryGridTile;
