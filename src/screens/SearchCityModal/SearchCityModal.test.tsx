import React from 'react';
import { act, fireEvent, render } from '@testing-library/react-native';
import SearchCityModal from '.';
import { DEFAULT_NOT_FOUND_TEXT } from 'components/NotFoundText/NotFoundText';
import { TopRightButton } from './SearchCityModal';

jest.useFakeTimers();

describe('SearchCityModal', () => {
  it('renders SearchCityModal', () => {
    const setOptionsFn = jest.fn();

    const initialParams = {
      location: 'Atlanta, Georgia',
      term: '',
      categories: []
    };
    const routeProps: any = { params: initialParams };
    const navigationProps: any = { setOptions: setOptionsFn };

    const component = render(
      <SearchCityModal navigation={navigationProps} route={routeProps} />
    );

    expect(component.toJSON()).toMatchSnapshot();

    fireEvent.changeText(component.getByRole('search'), 'Houston');

    act(() => {
      jest.runAllTimers();
    });

    expect(component.getByRole('list').props.data).toHaveLength(1);
    expect(component.getByText('Houston, Texas')).toBeTruthy();

    expect(
      component.getByRole('radio').props.style[0].backgroundColor
    ).toBeFalsy();

    fireEvent.press(component.getByRole('button'));

    expect(setOptionsFn).toBeCalledTimes(1);
    expect(
      component.getByRole('radio').props.style[0].backgroundColor
    ).toBeTruthy();

    fireEvent.changeText(component.getByRole('search'), 'Osaka');

    act(() => {
      jest.runAllTimers();
    });

    expect(component.getByText(DEFAULT_NOT_FOUND_TEXT)).toBeTruthy();
  });

  it('renders TopRightButton', () => {
    const args = { location: 'Houston, Texas', term: '', categories: [] };
    const navigation: any = {
      navigate: jest.fn()
    };
    const component = render(
      <TopRightButton args={args} navigation={navigation} />
    );

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.getByText('OK')).toBeTruthy();

    fireEvent.press(component.getByRole('button'));

    expect(navigation.navigate).toHaveBeenCalledWith('SearchModal', args);
  });
});
