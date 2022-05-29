import React from 'react';
import { render } from '@testing-library/react-native';
import BusinessCategory from './BusinessCategory';
import { BUSINESS_DUMMY } from 'shared/mocks';

describe('BusinessCategory', () => {
  it('renders BusinessCategory', () => {
    const component = render(<BusinessCategory {...BUSINESS_DUMMY} />);

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.getByRole('text').props).toHaveProperty(
      'children',
      BUSINESS_DUMMY.price
    );
    expect(component.getByRole('summary').props).toHaveProperty(
      'children',
      BUSINESS_DUMMY.categories.map(category => category.title).join(', ')
    );
  });
});
