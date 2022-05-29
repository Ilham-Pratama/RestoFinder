import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Pressable, View } from 'react-native';
import sharedStyles from 'shared/styles';
import ThemedText from 'components/ThemedText';
import { CategoryItemProps } from './types';

const CategoryItem = ({
  label,
  value,
  image,
  onPress,
  isActive,
  isLastElement
}: CategoryItemProps) => {
  const theme = useTheme();

  return (
    <View
      accessibilityRole="checkbox"
      style={[
        styles.itemContainer,
        sharedStyles.elevation,
        {
          backgroundColor: isActive ? theme.colors.primary : theme.colors.card,
          marginRight: isLastElement ? 15 : 0
        }
      ]}>
      <Pressable
        onPress={() => onPress(value)}
        style={styles.rippleContainer}
        android_ripple={{ color: theme.colors.border }}
        accessibilityRole="button">
        {image ? (
          <View
            style={[
              styles.imageContainer,
              { backgroundColor: theme.colors.card }
            ]}>
            <Image
              accessibilityRole="image"
              style={styles.imageStyle}
              source={image}
            />
          </View>
        ) : null}
        <ThemedText accessibilityRole="text" style={styles.textStyle}>
          {label}
        </ThemedText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 35,
    marginLeft: 15,
    marginVertical: 10,
    width: 70,
    height: 100,
    overflow: 'hidden'
  },
  rippleContainer: {
    alignItems: 'center',
    paddingTop: 10,
    flex: 1
  },
  imageContainer: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  imageStyle: {
    height: 30,
    width: 30
  },
  textStyle: {
    marginTop: 4
  }
});

export default CategoryItem;
