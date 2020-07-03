import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ImageDetail} from 'components';

import {
  IconImage,
  SplashImage,
  BeachImage,
  MountainImage,
  ForestImage,
} from 'assets';
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSource={ForestImage} score={2} />
      <ImageDetail title="Beach" imageSource={BeachImage} score={4} />
      <ImageDetail title="Mountain" imageSource={MountainImage} score={6} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
