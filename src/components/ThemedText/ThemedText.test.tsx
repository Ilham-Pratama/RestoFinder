import React from 'react';
import { render } from '@testing-library/react-native';
import withNavigationContainer from 'shared/libs/withNavigationContainer';
import { AppDarkTheme, AppLightTheme } from 'shared/themes';
import ThemedText from '.';

describe('ThemedText', () => {
  const text = 'Sample Text';
  const defaultText = <ThemedText>{text}</ThemedText>;

  it('renders text in light mode', () => {
    const LightComponent = withNavigationContainer(defaultText);
    const lightComponent = render(<LightComponent />);

    expect(lightComponent.toJSON()).toMatchSnapshot();
    expect(lightComponent.getByText(text).props).toHaveProperty(
      'style.1.color',
      AppLightTheme.colors.text
    );
  });

  it('renders text in dark mode', () => {
    const DarkComponent = withNavigationContainer(defaultText, true);
    const darkComponent = render(<DarkComponent />);

    expect(darkComponent.toJSON()).toMatchSnapshot();
    expect(darkComponent.getByText(text).props).toHaveProperty(
      'style.1.color',
      AppDarkTheme.colors.text
    );
  });

  const color = '#121212';
  const darkModeColor = '#f4f4f4';
  const customText = (
    <ThemedText color={color} darkModeColor={darkModeColor}>
      {text}
    </ThemedText>
  );

  it('renders text in light mode with custom colors', () => {
    const LightComponent = withNavigationContainer(customText);
    const lightComponent = render(<LightComponent />);

    expect(lightComponent.toJSON()).toMatchSnapshot();
    expect(lightComponent.getByText(text).props).toHaveProperty(
      'style.1.color',
      color
    );
  });

  it('renders text in dark mode with custom colors', () => {
    const DarkComponent = withNavigationContainer(customText, true);
    const darkComponent = render(<DarkComponent />);

    expect(darkComponent.toJSON()).toMatchSnapshot();
    expect(darkComponent.getByText(text).props).toHaveProperty(
      'style.1.color',
      darkModeColor
    );
  });
});
