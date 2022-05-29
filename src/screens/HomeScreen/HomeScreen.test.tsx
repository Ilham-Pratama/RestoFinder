import React from 'react';

// Note: test renderer must be required after react-native.
import { fireEvent, render } from '@testing-library/react-native';
import HomeScreen from '.';

// TODO(Tama): do a research on how to mock the same module, multiple times in the same file
jest.mock('shared/api/useBusinessList', () => () => ({
  data: {
    total: 2,
    businesses: [
      {
        id: '1',
        rating: 4.5,
        price: '$$',
        phone: '81234567890',
        alias: 'TST 1',
        is_closed: false,
        location: {
          city: 'New York',
          country: 'United States',
          address1: '',
          address2: '',
          address3: '',
          state: 'New York',
          zip_code: '123'
        },
        categories: [
          {
            alias: 'Burgers',
            title: 'burgers'
          },
          {
            alias: 'desserts',
            title: 'Desserts'
          }
        ],
        review_count: 1252,
        name: 'Business 1',
        url: 'https://example.com',
        image_url: 'https://example.com'
      },
      {
        id: '2',
        rating: 4.7,
        price: '$$',
        phone: '81234567891',
        alias: 'TST 2',
        is_closed: false,
        location: {
          city: 'Austin',
          country: 'United States',
          address1: '',
          address2: '',
          address3: '',
          state: 'Texas',
          zip_code: '321'
        },
        categories: [
          {
            alias: 'Pizza',
            title: 'pizza'
          },
          {
            alias: 'Steak',
            title: 'steak'
          }
        ],
        review_count: 2052,
        name: 'Business 2',
        url: 'https://example.com',
        image_url: 'https://example.com'
      }
    ]
  },
  isLoading: false,
  isError: false
}));

it('renders and assert loading state', () => {
  const navigateFn = jest.fn();

  const initialParams = {
    location: 'Atlanta, Georgia',
    term: '',
    categories: []
  };
  const routeProps: any = { params: initialParams };

  const navigationProps: any = { navigate: navigateFn };

  const component = render(
    <HomeScreen route={routeProps} navigation={navigationProps} />
  );

  expect(component.toJSON()).toMatchSnapshot();

  expect(component.getByText('Grab your')).toBeTruthy();
  expect(component.getByText('delicious meal!')).toBeTruthy();

  expect(component.getByText('Top Restaurants').props.style[0]).toHaveLength(3);

  expect(component.getByText(initialParams.location).props).toHaveProperty(
    'accessibilityRole',
    'text'
  );

  fireEvent.press(component.getByRole('search'));

  expect(navigateFn).toHaveBeenCalledWith('SearchModal', initialParams);

  expect(component.getAllByRole('menuitem')).toHaveLength(2);
  expect(component.getByRole('menu').props.data).toHaveLength(2);
  expect(component.getByRole('menu').props.style).toHaveLength(1);
  expect(component.getByText('Business 1').props).toHaveProperty(
    'accessibilityRole',
    'header'
  );
  expect(component.getByText('Business 2').props).toHaveProperty(
    'accessibilityRole',
    'header'
  );
});
