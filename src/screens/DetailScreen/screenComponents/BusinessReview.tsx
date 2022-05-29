import { useTheme } from '@react-navigation/native';
import Header from 'components/Header';
import LoadingIndicator from 'components/LoadingIndicator';
import NotFoundText from 'components/NotFoundText';
import Review from 'components/Review';
import React, { useCallback } from 'react';
import { Linking, View } from 'react-native';
import useBusinessReview from 'shared/api/useBusinessReview';
import sharedStyles from 'shared/styles';
import { Business } from 'types/Business';

const BusinessReview = ({ id }: Business) => {
  const theme = useTheme();

  const result = useBusinessReview({
    variables: { id }
  });

  const renderReviews = useCallback(() => {
    const { data, isLoading, isError } = result;

    if (isLoading) {
      return <LoadingIndicator />;
    }

    if (isError || !data) {
      return <NotFoundText text="Failed loading reviews 😢" />;
    }

    return data.reviews.map(review => (
      <Review
        key={review.id}
        review={review}
        onPress={() => Linking.openURL(review.url)}
      />
    ));
  }, [result]);

  return (
    <View
      style={[
        { backgroundColor: theme.colors.card },
        sharedStyles.paddingVertical4,
        sharedStyles.marginTop2
      ]}>
      <Header>Reviews</Header>
      {renderReviews()}
    </View>
  );
};

export default BusinessReview;
