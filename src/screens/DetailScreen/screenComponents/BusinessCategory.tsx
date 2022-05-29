import { useTheme } from '@react-navigation/native';
import ThemedText from 'components/ThemedText';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import sharedStyles from 'shared/styles';
import { Business } from 'types/Business';

const BusinessCategory = ({ price, categories }: Business) => {
  const theme = useTheme();
  return (
    <View
      style={[
        { backgroundColor: theme.colors.card },
        sharedStyles.paddingHorizontal3,
        sharedStyles.paddingVertical4
      ]}>
      <ThemedText
        accessibilityRole="text"
        style={styles.openUntil}
        color="gray"
        darkModeColor="#f4f4f4">
        {price}
      </ThemedText>
      <ThemedText
        accessibilityRole="summary"
        style={[styles.priceCategory, sharedStyles.marginTop2]}>
        {categories.map(category => category.title).join(', ')}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  priceCategory: {
    fontSize: 18,
    fontWeight: '500'
  },
  openUntil: {
    fontWeight: '900',
    fontSize: 14
  }
});

export default BusinessCategory;
