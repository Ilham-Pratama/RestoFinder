import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { REVIEW_DUMMY } from 'shared/mocks';
import Review from '.';

describe('Review', () => {
  it('renderrs Review', () => {
    const pressFn = jest.fn();
    const component = render(
      <Review review={REVIEW_DUMMY} onPress={pressFn} />
    );

    expect(component.toJSON()).toMatchSnapshot();

    fireEvent.press(component.getByRole('button'));

    expect(pressFn).toHaveBeenCalledTimes(1);

    expect(component.getAllByRole('image')).toHaveLength(6);
    expect(component.getByText(REVIEW_DUMMY.user.name).props).toHaveProperty(
      'accessibilityRole',
      'header'
    );
    expect(component.getByText(REVIEW_DUMMY.text).props).toHaveProperty(
      'accessibilityRole',
      'summary'
    );
    expect(
      component.getByText(REVIEW_DUMMY.time_created.split(' ')[0]).props
    ).toHaveProperty('accessibilityRole', 'text');
  });
});
