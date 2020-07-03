import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({title, imageSource, score}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.images} source={imageSource} />
      <Text>{title}</Text>
      <Text>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
  },
  images: {
    flex: 0,
  },
});

export default ImageDetail;
