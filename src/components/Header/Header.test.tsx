import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '.';

describe('Header', () => {
  it('renders Header', () => {
    const children = 'Header Example';
    const component = render(<Header>{children}</Header>);

    const text = component.getByRole('header');

    expect(component.toJSON()).toMatchSnapshot();
    expect(text.props.style[0].length).toBe(3);
    expect(text.props.children).toBe(children);
  });
});
