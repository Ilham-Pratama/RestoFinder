import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type Category =
  | 'burgers'
  | 'desserts'
  | 'pastashops'
  | 'pizza'
  | 'juicebars'
  | 'steak';

export interface SearchScreenProps {
  term: string;
  categories: Category[];
  location: string;
}

export interface DetailScreenProps {
  id: string;
  name: string;
}

export type RootStackParamList = {
  Home: Partial<SearchScreenProps>;
  Details: DetailScreenProps;
  SearchModal: SearchScreenProps;
  SearchCityModal: SearchScreenProps;
};

export type NativeStackScreenProp<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
