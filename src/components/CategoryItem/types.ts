import { Category } from 'types/globalTypes';

export interface ICategoryItem {
  label: string;
  value: Category;
  image: any;
}

export interface CategoryItemProps extends ICategoryItem {
  onPress: (value: Category) => void;
  isActive?: boolean;
  isLastElement?: boolean;
}
