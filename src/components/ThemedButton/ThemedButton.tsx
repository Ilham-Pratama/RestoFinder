import React from 'react';
import { Theme, useTheme } from '@react-navigation/native';
import { SvgIconProps } from 'assets/svgs/types';
import { AccessibilityRole, Pressable, StyleSheet, Text } from 'react-native';
import sharedStyles from 'shared/styles';

interface ThemedButtonProps {
  title: string;
  onPress: () => void;
  textColor?: string;
  icon?: React.FC<SvgIconProps>;
  size?: 'small' | 'medium';
  noMargin?: boolean;
  noShadow?: boolean;
  noBorderRadius?: boolean;
  accessibilityRole?: AccessibilityRole;
}

const ThemedButton = ({
  onPress,
  icon: Icon,
  textColor,
  title,
  size = 'medium',
  accessibilityRole = 'button',
  noMargin,
  noShadow,
  noBorderRadius
}: ThemedButtonProps) => {
  const isSmall = size === 'small';
  const theme: Theme = useTheme();

  return (
    <Pressable
      style={[
        styles.container,
        ...(noShadow ? [] : [sharedStyles.elevation]),
        {
          backgroundColor: theme.colors.primary,
          paddingVertical: isSmall ? 10 : 15,
          borderRadius: noBorderRadius ? 5 : isSmall ? 20 : 25,
          margin: noMargin ? 0 : 10
        }
      ]}
      android_ripple={{ color: theme.colors.border }}
      onPress={onPress}
      accessibilityRole={accessibilityRole}
      android_disableSound>
      <Text
        style={[
          styles.title,
          {
            color: textColor ? textColor : theme.colors.text,
            marginRight: Icon ? 10 : 0
          }
        ]}>
        {title.toUpperCase()}
      </Text>
      {Icon && <Icon height={15} width={15} fill={theme.colors.text} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold'
  }
});

export default ThemedButton;
