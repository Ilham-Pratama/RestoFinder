import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SearchModalScreen from 'screens/SearchModal';
import SearchCityModal from 'screens/SearchCityModal';

import { RootStackParamList } from './types/globalTypes';
import { AppDarkTheme, AppLightTheme } from 'shared/themes';
import getRandomCityName from 'shared/libs/getRandomCity';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const queryClient = new QueryClient();

export const Navigations = ({
  initialRouteName = 'Home',
  fixedInitialCity
}: INavigations) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
          initialParams={{
            term: '',
            location: fixedInitialCity
              ? 'New York, New York'
              : getRandomCityName(),
            categories: []
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.name
          })}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="SearchModal"
          component={SearchModalScreen}
          options={{ title: 'Search Restaurants' }}
          initialParams={{
            term: '',
            location: '',
            categories: []
          }}
        />
        <Stack.Screen
          name="SearchCityModal"
          component={SearchCityModal}
          initialParams={{
            term: '',
            location: '',
            categories: []
          }}
          options={{ title: 'Search Location' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={isDarkMode ? AppDarkTheme : AppLightTheme}>
        <Navigations />
      </NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </QueryClientProvider>
  );
};

interface INavigations {
  initialRouteName?: keyof RootStackParamList;
  fixedInitialCity?: boolean;
}

export default App;
