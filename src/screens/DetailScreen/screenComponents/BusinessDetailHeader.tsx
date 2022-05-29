import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import sharedStyles from 'shared/styles';
import Rating from 'components/Rating';
import ImageCarousel from 'components/ImageCarousel';
import { Business } from 'types/Business';

const BusinessDetailHeader = ({
  name,
  photos,
  rating,
  review_count
}: Business) => {
  return (
    <View>
      <ImageCarousel images={photos} />
      <LinearGradient
        // accessibilityRole="none"
        colors={[
          '#00000000',
          '#00000000',
          '#00000000',
          '#0000005d',
          '#000000a1',
          '#000000ce'
        ]}
        style={styles.darkBg}
      />
      <View
        style={[
          styles.absoluteContainer,
          sharedStyles.paddingVertical2,
          sharedStyles.paddingHorizontal3
        ]}>
        <Text style={styles.name} accessibilityRole="header">
          {name}
        </Text>
        <Rating rating={rating} review_count={review_count} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  darkBg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  absoluteContainer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    bottom: 0,
    left: 0,
    right: 0
  },
  name: {
    fontSize: 30,
    fontWeight: '800',
    color: '#f4f4f4'
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  reviewCount: {
    color: '#f4f4f4'
  }
});

export default BusinessDetailHeader;
