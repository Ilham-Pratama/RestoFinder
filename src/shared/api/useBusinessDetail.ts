import { useQuery } from 'react-query';
import { apiClient } from 'shared/apiClient';
import { Business } from 'types/Business';
import { QueryArgs } from './types';

export const getBusinessDetail = async (id: String) => {
  const result = await apiClient.get<Business>(`/businesses/${id}`);
  return result.data;
};

interface IUseBusinessDetail {
  id: String;
}

const useBusinessDetail = ({
  variables: { id },
  onError,
  onSuccess,
  onSettled
}: QueryArgs<IUseBusinessDetail, Business>) => {
  return useQuery<Business, Error>(
    ['BusinessDetail', id],
    () => getBusinessDetail(id),
    { onError, onSuccess, onSettled }
  );
};

export default useBusinessDetail;
