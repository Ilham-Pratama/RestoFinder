import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import LocationItem from '.';
import { AppLightTheme } from 'shared/themes';
import withNavigationContainer from 'shared/libs/withNavigationContainer';

describe('LocationItem', () => {
  it('renders and clicks unselected item', () => {
    const name = 'Houston, Texas';
    const onSelect = jest.fn();
    const Component = withNavigationContainer(
      <LocationItem name={name} onSelect={onSelect} />
    );
    const component = render(<Component />);

    expect(component.toJSON()).toMatchSnapshot();

    expect(component.getByText(name).props).toHaveProperty(
      'accessibilityRole',
      'text'
    );

    expect(component.getByRole('radio').props).toHaveProperty(
      'style.0.backgroundColor',
      undefined
    );

    fireEvent.press(component.getByRole('button'));

    expect(onSelect).toHaveBeenCalledWith(name);
  });

  it('renders and clicks selected item', () => {
    const name = 'Houston, Texas';
    const onSelect = jest.fn();
    const Component = withNavigationContainer(
      <LocationItem name={name} onSelect={onSelect} selected />
    );
    const component = render(<Component />);

    expect(component.toJSON()).toMatchSnapshot();

    expect(component.getByText(name).props).toHaveProperty(
      'accessibilityRole',
      'text'
    );
    expect(component.getByRole('radio').props).toHaveProperty(
      'style.0.backgroundColor',
      AppLightTheme.colors.primary
    );

    fireEvent.press(component.getByRole('button'));

    expect(onSelect).toHaveBeenCalledWith(name);
  });
});
