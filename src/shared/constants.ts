import { ICategoryItem } from 'components/CategoryItem/types';

export const MENU_CATEGORIES: ICategoryItem[] = [
  {
    label: 'Burger',
    value: 'burgers',
    image: require('assets/images/burger.png')
  },
  {
    label: 'Dessert',
    value: 'desserts',
    image: require('assets/images/cake.png')
  },
  {
    label: 'Pasta',
    value: 'pastashops',
    image: require('assets/images/pasta.png')
  },
  {
    label: 'Pizza',
    value: 'pizza',
    image: require('assets/images/pizza.png')
  },
  {
    label: 'Smoothies',
    value: 'juicebars',
    image: require('assets/images/smoothies.png')
  },
  {
    label: 'steak',
    value: 'steak',
    image: require('assets/images/steak.png')
  }
];
