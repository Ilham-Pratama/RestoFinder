import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { BUSINESS_DUMMY } from 'shared/mocks';
import BusinessInfo from './BusinessInfo';

describe('BusinessInfo', () => {
  it('renders BusinessInfo', () => {
    const yelpOpenUrlFn = jest.fn();
    const component = render(
      <BusinessInfo {...BUSINESS_DUMMY} onVisitYelpSite={yelpOpenUrlFn} />
    );

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.getByRole('header').props).toHaveProperty(
      'children',
      'Business Info'
    );
    expect(
      component.getByText(BUSINESS_DUMMY.location.address1).props
    ).toHaveProperty('accessibilityRole', 'text');
    expect(
      component.getByText(BUSINESS_DUMMY.display_phone).props
    ).toHaveProperty('accessibilityRole', 'text');

    fireEvent.press(component.getByRole('button'));

    expect(yelpOpenUrlFn).toHaveBeenCalledWith(BUSINESS_DUMMY.url);
  });
});
