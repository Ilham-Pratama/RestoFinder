import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import ThemedButton from '.';
import SearchIcon from 'assets/svgs/SearchIcon';
import withNavigationContainer from 'shared/libs/withNavigationContainer';
import { AppLightTheme } from 'shared/themes';

describe('ThemedButton', () => {
  it('renders and clicks basic button', () => {
    const title = 'Test Button';
    const clickFn = jest.fn();
    const Component = withNavigationContainer(
      <ThemedButton title={title} onPress={clickFn} />
    );
    const component = render(<Component />);

    const buttonRole = component.getByRole('button');
    const labelContainer = component.getByText(title.toUpperCase());

    expect(component.toJSON()).toMatchSnapshot();

    expect(buttonRole.props.style).toHaveLength(3);
    expect(buttonRole.props).toHaveProperty(
      'style.2.backgroundColor',
      AppLightTheme.colors.primary
    );
    expect(buttonRole.props).toHaveProperty('style.2.paddingVertical', 15);
    expect(buttonRole.props).toHaveProperty('style.2.borderRadius', 25);
    expect(buttonRole.props).toHaveProperty('style.2.margin', 10);

    expect(labelContainer.props.style).toHaveLength(2);
    expect(labelContainer.props).toHaveProperty('style.1.marginRight', 0);
    expect(labelContainer.props).toHaveProperty(
      'style.1.color',
      AppLightTheme.colors.text
    );

    fireEvent.press(buttonRole);

    expect(clickFn).toHaveBeenCalled();
  });

  it('renders and clicks small button with icon, text color, no margin, and no shadow', () => {
    const title = 'Test Button';
    const textColor = '#F4F4F4';
    const clickFn = jest.fn();
    const Component = withNavigationContainer(
      <ThemedButton
        title={title}
        onPress={clickFn}
        icon={SearchIcon}
        textColor={textColor}
        size="small"
        noMargin
        noShadow
      />
    );
    const component = render(<Component />);

    const buttonRole = component.getByRole('button');
    const labelContainer = component.getByText(title.toUpperCase());

    expect(component.toJSON()).toMatchSnapshot();

    expect(buttonRole.props.style).toHaveLength(2);
    expect(buttonRole.props).toHaveProperty('style.1.paddingVertical', 10);
    expect(buttonRole.props).toHaveProperty('style.1.borderRadius', 20);
    expect(buttonRole.props).toHaveProperty('style.1.margin', 0);

    expect(component.getByRole('image').props).toHaveProperty('height', 15);
    expect(component.getByRole('image').props).toHaveProperty('width', 15);
    expect(component.getByRole('image').props).toHaveProperty(
      'fill',
      AppLightTheme.colors.text
    );

    expect(labelContainer.props).toHaveProperty('style.1.marginRight', 10);
    expect(labelContainer.props).toHaveProperty('style.1.color', textColor);

    fireEvent.press(component.getByRole('button'));

    expect(clickFn).toHaveBeenCalled();
  });

  it('renders and clicks button with no border radius', () => {
    const clickFn = jest.fn();

    const component = render(
      <ThemedButton title="Test Button" onPress={clickFn} noBorderRadius />
    );

    const buttonRole = component.getByRole('button');

    expect(component.toJSON()).toMatchSnapshot();
    expect(buttonRole.props).toHaveProperty('style.2.borderRadius', 5);

    fireEvent.press(component.getByRole('button'));

    expect(clickFn).toHaveBeenCalled();
  });
});
