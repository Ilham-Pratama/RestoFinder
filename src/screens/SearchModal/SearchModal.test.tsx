import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import SearchModal from '.';
import { MENU_CATEGORIES } from 'shared/constants';

describe('SearchModal', () => {
  const params = {
    location: 'Houston, Texas',
    term: 'Sample term',
    categories: [MENU_CATEGORIES[0].value]
  };
  it('renders SearchModal', () => {
    const setParams = jest.fn();
    const navigate = jest.fn();

    const route: any = { params };
    const navigation: any = { setParams, navigate };

    const component = render(
      <SearchModal route={route} navigation={navigation} />
    );

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.getByText(params.location).props).toHaveProperty(
      'accessibilityRole',
      'text'
    );

    fireEvent.press(component.getByRole('tab'));

    expect(navigate).toBeCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('SearchCityModal', params);

    const newTerm = 'New term';

    fireEvent.changeText(component.getByRole('search'), newTerm);

    expect(setParams).toHaveBeenCalledWith({ term: newTerm });
    expect(component.getByRole('list').props.data).toHaveLength(
      MENU_CATEGORIES.length
    );

    fireEvent.press(component.getAllByRole('button')[0]);

    expect(setParams).toHaveBeenCalledWith({ categories: [] });

    fireEvent.press(component.getAllByRole('button')[2]);

    expect(setParams).toHaveBeenCalledWith({
      categories: [...params.categories, MENU_CATEGORIES[2].value]
    });

    // Get and click the bottom button
    fireEvent.press(component.getAllByRole('button')[MENU_CATEGORIES.length]);

    expect(navigate).toBeCalledTimes(2);
    expect(navigate).toHaveBeenCalledWith('Home', params);
  });
});
