import { useTheme } from '@react-navigation/native';
import Rating from 'components/Rating';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import sharedStyles, { ON_PRESS_BACKGROUND_COLOR } from 'shared/styles';
import ThemedText from '../ThemedText';

interface IBusinessItem {
  name: string;
  stars: number;
  image: string;
  price: string;
  onPress: () => void;
}

const BusinessItem = (props: IBusinessItem) => {
  const theme = useTheme();
  return (
    <View
      accessibilityRole="menuitem"
      style={[
        { backgroundColor: theme.colors.card },
        styles.container,
        sharedStyles.elevation,
        sharedStyles.marginHorizontal3,
        sharedStyles.marginBottom2
      ]}>
      <Pressable
        style={[styles.pressableContainer]}
        onPress={props.onPress}
        android_ripple={{ color: ON_PRESS_BACKGROUND_COLOR }}>
        <Image
          accessibilityRole="imagebutton"
          style={styles.image}
          source={{ uri: props.image }}
        />
        <View style={styles.textContainer}>
          <ThemedText accessibilityRole="header" style={[styles.name]}>
            {props.name}
          </ThemedText>
          <View>
            <Rating rating={props.stars} size="small" />
          </View>
          {props.price ? (
            <ThemedText
              accessibilityRole="text"
              style={styles.bottomText}
              color="#ba8f02"
              darkModeColor="rgb(200, 200, 200)">
              {props.price}
            </ThemedText>
          ) : null}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    overflow: 'hidden',
    borderRadius: 50
  },
  pressableContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  bottomText: {
    fontSize: 14
  }
});

export default BusinessItem;
