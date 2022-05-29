import { useQuery } from 'react-query';
import { apiClient } from 'shared/apiClient';
import { BusinessReview } from 'types/Review';
import { QueryArgs } from './types';

export const getBusinessReview = async (id: String) => {
  const result = await apiClient.get<BusinessReview>(
    `/businesses/${id}/reviews`
  );
  return result.data;
};

interface IUseBusinessReview {
  id: String;
}

const useBusinessReview = ({
  variables: { id },
  onError,
  onSuccess,
  onSettled
}: QueryArgs<IUseBusinessReview, BusinessReview>) => {
  return useQuery<BusinessReview, Error>(
    ['BusinessReview', id],
    () => getBusinessReview(id),
    { onError, onSuccess, onSettled }
  );
};

export default useBusinessReview;
