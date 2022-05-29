import React from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import LocationIcon from 'assets/svgs/LocationIcon';
import SearchIcon from 'assets/svgs/SearchIcon';
import ShopIcon from 'assets/svgs/ShopIcon';
import CategoryItem from 'components/CategoryItem';
import MainTextInput from 'components/MainTextInput';
import ThemedButton from 'components/ThemedButton';
import { MENU_CATEGORIES } from 'shared/constants';
import sharedStyles from 'shared/styles';
import type { Category, NativeStackScreenProp } from 'types/globalTypes';

const SearchModal = ({
  route: { params },
  navigation: { setParams, navigate }
}: NativeStackScreenProp<'SearchModal'>) => {
  const { location, term, categories } = params;

  const onCategorySelect = (value: Category) => {
    if (categories.includes(value)) {
      const newCategories = categories.filter(v => v !== value);
      setParams({ categories: newCategories });
    } else setParams({ categories: [...categories, value] });
  };

  const setTerm = (text: string) => {
    setParams({ term: text });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={sharedStyles.marginTop2}>
        <Pressable
          accessibilityRole="tab"
          onPress={() => navigate('SearchCityModal', params)}>
          <MainTextInput value={location} icon={LocationIcon} disabled />
        </Pressable>
      </View>
      <View style={sharedStyles.marginTop2}>
        <MainTextInput
          value={term}
          onChangeText={setTerm}
          icon={ShopIcon}
          placeholder="Search name, category, food, or anything"
        />
      </View>
      <View style={sharedStyles.marginTop1}>
        <FlatList
          data={MENU_CATEGORIES}
          keyExtractor={item => item.value}
          renderItem={({ item }) => (
            <CategoryItem
              {...item}
              onPress={onCategorySelect}
              isLastElement={
                item.value === MENU_CATEGORIES[MENU_CATEGORIES.length - 1].value
              }
              isActive={categories.includes(item.value)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          accessibilityRole="list"
        />
      </View>
      <View style={styles.bottomContainer}>
        <ThemedButton
          title="Search"
          size="small"
          icon={SearchIcon}
          onPress={() => {
            navigate('Home', {
              term,
              categories,
              location
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default SearchModal;
