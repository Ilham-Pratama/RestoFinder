import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import BusinessItem from '.';
import { AppLightTheme } from 'shared/themes';
import withNavigationContainer from 'shared/libs/withNavigationContainer';

describe('BusinessItem', () => {
  it('renders BusinessItem', () => {
    const name = 'Business Item 1';
    const stars = 4.5;
    const image = 'https://example.com';
    const price = '$$';

    const onPress = jest.fn();

    const Component = withNavigationContainer(
      <BusinessItem
        onPress={onPress}
        name={name}
        stars={stars}
        image={image}
        price={price}
      />
    );

    const component = render(<Component />);

    expect(component.toJSON()).toMatchSnapshot();

    expect(component.getByRole('menuitem').props).toHaveProperty(
      'style.0.backgroundColor',
      AppLightTheme.colors.card
    );

    expect(component.getByRole('imagebutton').props).toHaveProperty(
      'source.uri',
      image
    );

    expect(component.getAllByRole('image').length).toBe(5);

    expect(component.getByText(name).props).toHaveProperty(
      'accessibilityRole',
      'header'
    );
    expect(component.getByText(name).props).toHaveProperty(
      'style.1.color',
      AppLightTheme.colors.text
    );

    expect(component.getByText(price).props).toHaveProperty(
      'accessibilityRole',
      'text'
    );
    expect(component.getByText(price).props).toHaveProperty('color', '#ba8f02');
    expect(component.getByText(price).props).toHaveProperty(
      'darkModeColor',
      'rgb(200, 200, 200)'
    );

    fireEvent.press(component.getByRole('menuitem'));

    expect(onPress).toHaveBeenCalled();
  });
});
