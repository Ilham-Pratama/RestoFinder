import { Theme } from '@react-navigation/native';
import { DarkTheme } from '@react-navigation/native';

export const AppLightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#c3f229',
    background: '#F2F2F2',
    card: '#FFF',
    text: '#1C1C1E',
    border: '#E2FFA7',
    notification: '#C1FC4C'
  }
};

export const AppDarkTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#3D3D3D',
    card: '#1A1A1A',
    background: '#121212'
  }
};
