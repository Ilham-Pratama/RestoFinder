import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import ThemedText from 'components/ThemedText';
import { Review as ReviewType } from 'types/Review';
import sharedStyles, { ON_PRESS_BACKGROUND_COLOR } from 'shared/styles';
import Rating from 'components/Rating';

interface ReviewProps {
  review: ReviewType;
  onPress: (review: ReviewType) => void;
}

const Review = ({ review, onPress }: ReviewProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      style={[sharedStyles.paddingVertical3, sharedStyles.paddingHorizontal3]}
      android_ripple={{
        color: ON_PRESS_BACKGROUND_COLOR
      }}
      onPress={() => onPress(review)}>
      <View style={[sharedStyles.flexDirectionRow, sharedStyles.marginBottom1]}>
        <View
          style={[
            sharedStyles.flex1,
            sharedStyles.flexDirectionRow,
            sharedStyles.alignItemsCenter
          ]}>
          <Image
            accessibilityRole="image"
            source={{ uri: review.user.image_url }}
            style={[styles.profileImage, sharedStyles.marginRight2]}
          />
          <View style={[sharedStyles.flex1]}>
            <ThemedText
              accessibilityRole="header"
              style={sharedStyles.textSemiBold}>
              {review.user.name}
            </ThemedText>
            <Rating rating={review.rating} size="small" />
          </View>
        </View>
        <View style={sharedStyles.justifyContentCenter}>
          <ThemedText color="gray" accessibilityRole="text">
            {review.time_created.split(' ')[0]}
          </ThemedText>
        </View>
      </View>
      <ThemedText accessibilityRole="summary">{review.text}</ThemedText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  }
});

export default Review;
