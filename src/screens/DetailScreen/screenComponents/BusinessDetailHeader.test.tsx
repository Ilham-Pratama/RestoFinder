import React from 'react';
import { render } from '@testing-library/react-native';
import BusinessDetailHeader from './BusinessDetailHeader';
import { BUSINESS_DUMMY } from 'shared/mocks';

describe('BusinessDetailHeader', () => {
  it('renders BusinessDetailHeader', () => {
    const component = render(<BusinessDetailHeader {...BUSINESS_DUMMY} />);

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.getAllByRole('image')).toHaveLength(8);
    expect(component.getByRole('header').props).toHaveProperty(
      'children',
      BUSINESS_DUMMY.name
    );
    expect(
      component.getAllByText(`${BUSINESS_DUMMY.review_count}`)
    ).toBeTruthy();
    expect(component.getByRole('none').props.colors).toHaveLength(6);
  });
});
