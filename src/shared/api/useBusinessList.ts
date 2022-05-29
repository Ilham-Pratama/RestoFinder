import { useQuery } from 'react-query';
import { apiClient } from 'shared/apiClient';
import { BusinessList } from 'types/Business';
import { SearchScreenProps } from 'types/globalTypes';
import { QueryArgs } from './types';

export const getBusinesses = async (params: SearchScreenProps) => {
  const result = await apiClient.get<BusinessList>('/businesses/search', {
    params: {
      term: params.term || undefined,
      location: params.location || undefined,
      categories: params.categories.join(', ') || undefined
    }
  });
  return result.data;
};

const useBusinessList = ({
  variables: { term, location, categories },
  onError,
  onSuccess,
  onSettled
}: QueryArgs<SearchScreenProps, BusinessList>) => {
  return useQuery<BusinessList, Error>(
    ['BusinessList', term, location, categories],
    () => getBusinesses({ term, location, categories }),
    {
      onError,
      onSuccess,
      onSettled
    }
  );
};

export default useBusinessList;
