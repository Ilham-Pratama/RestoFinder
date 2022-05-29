import React from 'react';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';
import { Navigations } from 'src/App';
import withNavigationContainer from 'shared/libs/withNavigationContainer';
import { DEFAULT_NOT_FOUND_TEXT } from 'components/NotFoundText/NotFoundText';

jest.mock('shared/api/useBusinessList', () => () => ({
  data: {
    total: 0,
    businesses: []
  },
  isLoading: false,
  isError: false
}));

it('renders and assert loading state', () => {
  const Component = withNavigationContainer(
    <Navigations initialRouteName="Home" fixedInitialCity />
  );

  const component = render(<Component />);

  expect(component.toJSON()).toMatchSnapshot();

  expect(component.getByText('Grab your')).toBeTruthy();
  expect(component.getByText('delicious meal!')).toBeTruthy();

  expect(component.getByText('Top Restaurants').props.style[0]).toHaveLength(3);

  expect(component.getByText(DEFAULT_NOT_FOUND_TEXT)).toBeTruthy();
});
