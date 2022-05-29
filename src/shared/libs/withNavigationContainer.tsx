import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppLightTheme, AppDarkTheme } from 'shared/themes';

const withNavigationContainer = (component: any, darkMode: boolean = false) => {
  return () => (
    <NavigationContainer theme={darkMode ? AppDarkTheme : AppLightTheme}>
      {component}
    </NavigationContainer>
  );
};

export default withNavigationContainer;
