import React from 'react'
import { GameList } from './gameList.component'
import { SafeAreaView, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Logo from '../assets/logo'
import { ScrollView } from 'react-native-gesture-handler'

export const Games = ({ navigation }) => (
  <>
    <SafeAreaView>
      <LinearGradient
        start={{ x: 0, y: 0.4385191355532845 }}
        end={{ x: 1, y: 0.5614808644467155 }}
        colors={['#140933', '#2A146A']}
      >
        <ScrollView>
          <Logo style={{ marginTop: 40, marginLeft: 30, marginBottom: 10 }} />
          <GameList navigation={navigation} />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  </>
)
