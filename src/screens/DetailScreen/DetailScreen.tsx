import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';

import NotFoundText from 'components/NotFoundText';
import type { NativeStackScreenProp } from 'types/globalTypes';
import BusinessCategory from './screenComponents/BusinessCategory';
import BusinessInfo from './screenComponents/BusinessInfo';
import BusinessReview from './screenComponents/BusinessReview';
import BusinessDetailHeader from './screenComponents/BusinessDetailHeader';
import LoadingIndicator from 'components/LoadingIndicator';
import useBusinessDetail from 'shared/api/useBusinessDetail';

const DetailScreen = (props: NativeStackScreenProp<'Details'>) => {
  const { route } = props;

  const { data, isLoading, isError } = useBusinessDetail({
    variables: { id: route.params.id }
  });

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError || !data) {
    return <NotFoundText text="Failed loading detail 😢" />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <BusinessDetailHeader {...data} />
        <BusinessCategory {...data} />
        <BusinessInfo {...data} />
        <BusinessReview {...data} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
