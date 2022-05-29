import { useTheme } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { Text, TextProps } from 'react-native';

interface IThemedText extends TextProps {
  color?: string;
  darkModeColor?: string;
}

const ThemedText = (props: IThemedText) => {
  const theme = useTheme();

  const textColor = useMemo(
    () =>
      theme.dark
        ? props.darkModeColor || theme.colors.text
        : props.color || theme.colors.text,
    [props, theme]
  );

  return <Text {...props} style={[props.style, { color: textColor }]} />;
};

export default ThemedText;
