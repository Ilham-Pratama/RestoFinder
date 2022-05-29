import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  NativeStackScreenProp,
  RootStackParamList,
  SearchScreenProps
} from 'types/globalTypes';
import SearchIcon from 'assets/svgs/SearchIcon';
import sharedStyles from 'shared/styles';
import MainTextInput from 'components/MainTextInput';
import LocationItem from 'components/LocationItem';
import ThemedButton from 'components/ThemedButton';
import NotFoundText from 'components/NotFoundText';
import getCityList from 'shared/libs/getCityList';
import useDebounce from 'shared/hooks/useDebounce';

interface ITopRightButton {
  args: SearchScreenProps;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'SearchCityModal',
    undefined
  >;
}

export const TopRightButton = ({ args, navigation }: ITopRightButton) => (
  <View style={styles.headerRightContainer}>
    <ThemedButton
      onPress={() => {
        navigation.navigate('SearchModal', args);
      }}
      title="OK"
      size="small"
      noMargin
      noBorderRadius
    />
  </View>
);

const SearchCityModal = ({
  route,
  navigation
}: NativeStackScreenProp<'SearchCityModal'>) => {
  const [term, setTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const debouncedTerm = useDebounce(term, 500);

  useEffect(() => {
    if (selectedLocation) {
      navigation.setOptions({
        headerRight: () => (
          <TopRightButton
            args={{
              ...route.params,
              location: selectedLocation
            }}
            navigation={navigation}
          />
        )
      });
    }
  }, [navigation, route, selectedLocation]);

  const searchResult = useMemo(
    () => getCityList(debouncedTerm, 20),
    [debouncedTerm]
  );

  const renderItems = useCallback(() => {
    if (!searchResult.length) {
      return <NotFoundText />;
    }
    return (
      <FlatList
        data={searchResult}
        keyExtractor={item => item}
        showsVerticalScrollIndicator
        style={[sharedStyles.marginTop3]}
        renderItem={({ item }) => (
          <LocationItem
            name={item}
            selected={selectedLocation === item}
            onSelect={name => setSelectedLocation(name)}
          />
        )}
        accessibilityRole="list"
      />
    );
  }, [searchResult, selectedLocation]);

  return (
    <SafeAreaView style={styles.container}>
      <MainTextInput
        value={term}
        onChangeText={setTerm}
        icon={SearchIcon}
        placeholder="Search City, State"
      />
      {renderItems()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
  headerRightContainer: { width: 50 }
});

export default SearchCityModal;
