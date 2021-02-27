import React from 'react';
import {StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

export const VideoModal = ({url}) => {
  return (
    <VideoPlayer
      source={{
        uri: url,
      }}
      style={styles.video}
      paused={false}
      fullscreen={true}
      resizeMode="contain"
      toggleResizeModeOnFullscreen={false}
    />
  );
};

const styles = StyleSheet.create({
  video: {
    marginTop: 20,
    maxHeight: 197,
    minHeight: 180,
    minWidth: 200,
    width: 350,
    flex: 1,
  },
});
