import React from 'react'
import VideoPlayer from 'react-native-video-controls'
import Orientation from 'react-native-orientation-locker'
import { StatusBar } from 'react-native'

export const VideoModal = ({ navigation, route: { params } }) => {
  return (
    <VideoPlayer
      source={{
        uri: params.url,
      }}
      paused={false}
      onBack={() => {
        Orientation.lockToPortrait()
        StatusBar.setHidden(false)
        navigation.goBack()
      }}
      onEnterFullscreen={() => {
        Orientation.lockToLandscape()
        StatusBar.setHidden(true)
      }}
      onExitFullscreen={() => {
        Orientation.lockToPortrait()
        StatusBar.setHidden(false)
      }}
    />
  )
}
