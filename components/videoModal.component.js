import React from 'react';
import {StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';
import {StatusBar} from 'react-native';

export const VideoModal = ({navigation, route: {params}}) => {
  return (
    <VideoPlayer
      source={{
        uri: params.url,
      }}
      paused={false}
      onBack={navigation.goBack}
      onEnterFullscreen={() => {
        Orientation.lockToLandscape();
        StatusBar.setHidden(true);
      }}
      onExitFullscreen={() => {
        Orientation.lockToPortrait();
        StatusBar.setHidden(false);
      }}
    />
  );
};

const styles = StyleSheet.create({
  video: {
    minHeight: 180,
    minWidth: 200,
  },
});
