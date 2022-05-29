import { fireEvent, render } from '@testing-library/react-native';
import SearchIcon from 'assets/svgs/SearchIcon';
import React from 'react';
import MainTextInput from '.';

describe('MainTextInput', () => {
  const text = 'test update text';

  it('renders basic MainTextInput', () => {
    const changeFn = jest.fn();
    const component = render(<MainTextInput onChangeText={changeFn} />);

    const textInput = component.getByRole('search');

    expect(component.toJSON()).toMatchSnapshot();

    expect(textInput.props).toHaveProperty('placeholderTextColor', 'gray');
    expect(textInput.props).toHaveProperty('style.1.marginLeft', 0);

    fireEvent.changeText(textInput, text);

    expect(changeFn).toHaveBeenCalledWith(text);
  });

  it('renders MainTextInput with icon', () => {
    const changeFn = jest.fn();
    const component = render(
      <MainTextInput onChangeText={changeFn} icon={SearchIcon} />
    );

    const textInput = component.getByRole('search');

    expect(component.toJSON()).toMatchSnapshot();

    expect(component.getByRole('image').props).toHaveProperty('height', 20);
    expect(component.getByRole('image').props).toHaveProperty('width', 20);

    expect(textInput.props).toHaveProperty('style.1.marginLeft', 10);

    fireEvent.changeText(textInput, text);

    expect(changeFn).toHaveBeenCalledWith(text);
  });

  it('renders disabled MainTextInput', () => {
    const component = render(<MainTextInput value={text} disabled />);

    const textComponent = component.getByRole('text');

    expect(component.toJSON()).toMatchSnapshot();

    expect(textComponent.props).toHaveProperty('style.1.color', 'black');
  });

  it('renders disabled MainTextInput without value', () => {
    const component = render(<MainTextInput disabled />);

    const textComponent = component.getByRole('text');

    expect(component.toJSON()).toMatchSnapshot();

    expect(textComponent.props).toHaveProperty('style.1.color', 'gray');
  });
});
