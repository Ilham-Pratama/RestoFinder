import { render } from '@testing-library/react-native';
import React from 'react';
import NotFoundText, { DEFAULT_NOT_FOUND_TEXT } from './NotFoundText';

describe('NotFoundText', () => {
  it('renders component with default text', () => {
    const component = render(<NotFoundText />);

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.getByText(DEFAULT_NOT_FOUND_TEXT).props).toHaveProperty(
      'color',
      'gray'
    );
  });

  it('renders component with custom text', () => {
    const customText = 'Here is your text';
    const component = render(<NotFoundText text={customText} />);

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.getByText(customText).props).toHaveProperty(
      'color',
      'gray'
    );
  });
});
