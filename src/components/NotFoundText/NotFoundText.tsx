import React from 'react';
import { View } from 'react-native';
import sharedStyles from 'shared/styles';
import ThemedText from '../ThemedText';

export const DEFAULT_NOT_FOUND_TEXT = "Oops, couldn't find anything 😢";

interface INotFoundText {
  text?: string;
}

const NotFoundText = ({ text = DEFAULT_NOT_FOUND_TEXT }: INotFoundText) => {
  return (
    <View
      accessibilityRole="text"
      style={[sharedStyles.alignItemsCenter, sharedStyles.marginTop1]}>
      <ThemedText style={[sharedStyles.marginVertical3]} color="gray">
        {text}
      </ThemedText>
    </View>
  );
};

export default NotFoundText;
