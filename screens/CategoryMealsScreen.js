import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  View,
  Text,
  Platform
} from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import { enableScreens } from 'react-native-screens';
import MealItem from '../components/MealItem';

enableScreens();

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const category = CATEGORIES.find(item => item.id == catId);

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {}}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      ></FlatList>
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const category = CATEGORIES.find(item => (item.id = catId));
  return {
    headerTitle: category.title
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
