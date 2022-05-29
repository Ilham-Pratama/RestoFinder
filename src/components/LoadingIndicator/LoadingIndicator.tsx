import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import sharedStyles from 'shared/styles';

const LoadingIndicator = () => {
  return (
    <View
      accessibilityRole="progressbar"
      style={[sharedStyles.alignItemsCenter, sharedStyles.marginTop4]}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingIndicator;
