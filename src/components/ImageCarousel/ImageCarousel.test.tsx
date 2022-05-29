import { render } from '@testing-library/react-native';
import React from 'react';
import ImageCarousel from '.';

const WIDTH = 120;
const IMAGES = ['image-1', 'image-2', 'image-3'];

jest.mock('react-native', () => {
  return {
    FlatList: jest.requireActual('react-native').FlatList,
    Image: jest.requireActual('react-native').Image,
    StyleSheet: jest.requireActual('react-native').StyleSheet,
    useWindowDimensions: () => ({ width: WIDTH })
  };
});

describe('ImageCarousel', () => {
  it('renders ImageCarousel', () => {
    const component = render(<ImageCarousel images={IMAGES} />);

    expect(component.toJSON()).toMatchSnapshot();

    const flatList = component.getByRole('list');

    expect(flatList.props.data).toHaveLength(IMAGES.length);
    expect(component.getAllByRole('image')).toHaveLength(IMAGES.length);
    expect(component.getAllByRole('image')[0].props).toHaveProperty(
      'source.uri',
      IMAGES[0]
    );
  });
});
