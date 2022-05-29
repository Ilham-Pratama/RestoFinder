import React from 'react';
import { FlatList, Text, View } from 'react-native';
import StarIcon from 'assets/svgs/StarIcon';
import sharedStyles from 'shared/styles';
import StarHalfIcon from 'assets/svgs/StarHalfIcon';
import StarStrokeIcon from 'assets/svgs/StarStroke';
import { SvgIconProps } from 'assets/svgs/types';
import { AppLightTheme } from 'shared/themes';

interface RatingProps {
  rating: number;
  review_count?: number;
  size?: 'small' | 'medium';
}

const Rating = ({ rating, review_count, size = 'medium' }: RatingProps) => {
  const RATING_ICON_HEIGHT = size === 'medium' ? 20 : 16;
  const RATING_ICON_WIDTH = size === 'medium' ? 20 : 16;

  return (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      keyExtractor={val => `${val}`}
      renderItem={({ item }) => {
        const getStyling =
          size === 'medium'
            ? sharedStyles.marginRight2
            : sharedStyles.marginRight1;

        const wrapIcon = (Icon: React.FC<SvgIconProps>) => {
          return (
            <View style={getStyling}>
              <Icon
                height={RATING_ICON_HEIGHT}
                width={RATING_ICON_WIDTH}
                fill={AppLightTheme.colors.primary}
              />
            </View>
          );
        };

        if (rating >= item) {
          return wrapIcon(StarIcon);
        }

        if (rating > item - 1) {
          return wrapIcon(StarHalfIcon);
        }

        return wrapIcon(StarStrokeIcon);
      }}
      horizontal
      style={[sharedStyles.marginVertical1]}
      ListFooterComponent={
        typeof review_count === 'number' ? (
          <View style={sharedStyles.marginHorizontal1}>
            <Text style={{ color: '#f4f4f4' }}>{review_count}</Text>
          </View>
        ) : null
      }
    />
  );
};

export default Rating;
