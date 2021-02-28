import React from 'react'
import { GameList } from './gameList.component'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

export const Games = ({ navigation }) => (
  <>
    <SafeAreaView style={{ backgroundColor: 'purple' }}>
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          fontWeight: '700',
        }}
      >
        Games
      </Text>
      <GameList navigation={navigation} />
    </SafeAreaView>
  </>
)
