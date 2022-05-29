import React, { useCallback } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import type { NativeStackScreenProp } from 'types/globalTypes';
import MainTextInput from 'components/MainTextInput';
import ThemedText from 'components/ThemedText';
import SearchIcon from 'assets/svgs/SearchIcon';
import BusinessItem from 'components/BusinessItem';
import sharedStyles from 'shared/styles';
import NotFoundText from 'components/NotFoundText';
import useBusinessList from 'shared/api/useBusinessList';
import LoadingIndicator from 'components/LoadingIndicator';

export const HeaderText = () => {
  return (
    <View
      accessibilityRole="header"
      style={[sharedStyles.marginHorizontal4, sharedStyles.marginVertical2]}>
      <ThemedText style={styles.headerTopText}>Grab your</ThemedText>
      <ThemedText style={styles.headerBottomText}>delicious meal!</ThemedText>
    </View>
  );
};

const HomeScreen = ({ navigation, route }: NativeStackScreenProp<'Home'>) => {
  const { location = '', term = '', categories = [] } = route.params;

  const { data, isLoading, isError } = useBusinessList({
    variables: {
      location,
      term,
      categories
    }
  });

  const renderItems = useCallback(() => {
    if (isLoading) {
      return <LoadingIndicator />;
    }
    if (isError) {
      return <NotFoundText text="Failed loading items 😢" />;
    }
    if (!data?.businesses.length) {
      return <NotFoundText />;
    }
    return (
      <FlatList
        accessibilityRole="menu"
        data={data?.businesses || []}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator
        style={[sharedStyles.marginTop2]}
        renderItem={({ item }) => (
          <BusinessItem
            name={item.name}
            stars={item.rating}
            image={item.image_url}
            price={item.price}
            onPress={() => {
              navigation.navigate('Details', { id: item.id, name: item.name });
            }}
          />
        )}
      />
    );
  }, [data, isLoading, isError, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderText />
      <Pressable
        accessibilityRole="search"
        onPress={() =>
          navigation.navigate('SearchModal', {
            term,
            categories,
            location
          })
        }>
        <MainTextInput value={location} icon={SearchIcon} disabled />
      </Pressable>
      <ThemedText
        style={[
          styles.topResultsText,
          sharedStyles.marginTop2,
          sharedStyles.marginHorizontal4
        ]}>
        Top Restaurants
      </ThemedText>
      {renderItems()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerTopText: {
    fontSize: 45
  },
  headerBottomText: {
    fontSize: 45,
    fontWeight: 'bold'
  },
  topResultsText: {
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default HomeScreen;
