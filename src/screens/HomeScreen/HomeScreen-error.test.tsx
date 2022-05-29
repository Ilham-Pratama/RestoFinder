import React from 'react';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';
import { Navigations } from 'src/App';
import withNavigationContainer from 'shared/libs/withNavigationContainer';

jest.mock('shared/api/useBusinessList', () => () => ({
  data: null,
  isLoading: false,
  isError: true
}));

it('renders and assert error state', () => {
  jest.doMock('shared/api/useBusinessList', () => () => ({
    data: null,
    isLoading: false,
    isError: true
  }));

  const Component = withNavigationContainer(
    <Navigations initialRouteName="Home" fixedInitialCity />
  );

  const component = render(<Component />);

  expect(component.toJSON()).toMatchSnapshot();

  expect(component.getByText('Grab your')).toBeTruthy();
  expect(component.getByText('delicious meal!')).toBeTruthy();

  expect(component.getByText('Top Restaurants').props.style[0]).toHaveLength(3);

  expect(component.getByText('Failed loading items 😢')).toBeTruthy();
});
