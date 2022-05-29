import React from 'react';
import { FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const { width } = useWindowDimensions();

  return (
    <FlatList
      accessibilityRole="list"
      data={images}
      keyExtractor={(image, idx) => `${image} - ${idx}`}
      renderItem={({ item }) => (
        <Image
          accessibilityRole="image"
          source={{ uri: item }}
          style={{ width }}
        />
      )}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      bounces={false}
      style={[styles.listContainer]}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: 250,
    overflow: 'hidden'
  }
});

export default ImageCarousel;
