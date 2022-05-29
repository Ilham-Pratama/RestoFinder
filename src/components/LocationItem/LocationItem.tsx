import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import ThemedText from '../ThemedText';

interface ILocationItem {
  name: string;
  onSelect: (value: string) => void;
  selected?: boolean;
}

const LocationItem = ({ name, selected, onSelect }: ILocationItem) => {
  const theme = useTheme();
  return (
    <View
      accessibilityRole="radio"
      style={[
        { backgroundColor: selected ? theme.colors.primary : undefined },
        styles.item
      ]}>
      <Pressable
        accessibilityRole="button"
        onPress={() => onSelect(name)}
        android_ripple={{ color: theme.colors.border }}
        style={styles.itemPressable}>
        <ThemedText accessibilityRole="text" style={styles.text}>
          {name}
        </ThemedText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    minHeight: 40,
    borderRadius: 20,
    marginHorizontal: 10,
    overflow: 'hidden'
  },
  itemPressable: {
    flex: 1,
    paddingLeft: 20,
    paddingVertical: 10,
    justifyContent: 'center'
  },
  text: {
    fontSize: 17,
    fontWeight: '500'
  }
});

export default LocationItem;
