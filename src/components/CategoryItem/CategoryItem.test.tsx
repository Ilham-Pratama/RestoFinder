import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CategoryItem from '.';
import { AppLightTheme } from 'shared/themes';
import withNavigationContainer from 'shared/libs/withNavigationContainer';

describe('CategoryItem', () => {
  const label = 'Pasta';
  const value = 'pastashops';
  const image = 1234;
  const onPressItem = jest.fn();

  it('renders and clicks item', () => {
    const Component = withNavigationContainer(
      <CategoryItem
        label={label}
        value={value}
        onPress={onPressItem}
        image={image}
      />
    );
    const component = render(<Component />);

    expect(component.toJSON()).toMatchSnapshot();

    expect(component.getByRole('checkbox').props).toHaveProperty(
      'style.2.backgroundColor',
      AppLightTheme.colors.card
    );
    expect(component.getByRole('checkbox').props).toHaveProperty(
      'style.2.marginRight',
      0
    );

    expect(component.getByText(label).props).toHaveProperty(
      'accessibilityRole',
      'text'
    );

    expect(component.getByRole('image').props).toHaveProperty('source', image);

    fireEvent.press(component.getByRole('button'));

    expect(onPressItem).toHaveBeenCalledWith(value);
  });

  it('renders last and active item', () => {
    const Component = withNavigationContainer(
      <CategoryItem
        label={label}
        value={value}
        onPress={onPressItem}
        image={image}
        isActive
        isLastElement
      />
    );
    const component = render(<Component />);

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.getByRole('checkbox').props).toHaveProperty(
      'style.2.backgroundColor',
      AppLightTheme.colors.primary
    );
    expect(component.getByRole('checkbox').props).toHaveProperty(
      'style.2.marginRight',
      15
    );
  });
});
