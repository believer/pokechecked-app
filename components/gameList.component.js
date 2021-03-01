import React from 'react'
import { useQuery } from 'react-query'
import { View, Text, StyleSheet } from 'react-native'
import { getHighlights } from '@jimjardland/nhl'
import { Game } from './game.component'
import moment from 'moment'

export const GameList = ({ navigation }) => {
  const { isLoading, isError, error, data } = useQuery('highlights', () =>
    getHighlights()
  )

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>
  }

  if (!data) {
    return <Text>Missing data</Text>
  }

  const renderItem = (data) => {
    return (
      <View key={data.day} style={{ marginTop: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              color: '#fff',
              flex: 1,
              fontFamily: 'ZillaSlab-Regular',
              fontSize: 18,
              marginLeft: 30,
            }}
          >
            {moment(data.date).format('dddd MMMM DD')}
          </Text>
          <View
            style={{
              backgroundColor: 'rgba(92,70,154,0.7)',
              height: 2,
              flex: 1,
              alignSelf: 'center',
              marginRight: 30,
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: 'black',
            height: 20,
            flex: 1,
            alignSelf: 'center',
          }}
        />
        {data.games.map((game, index) => (
          <Game
            key={game.arena}
            game={game}
            index={index}
            navigation={navigation}
          />
        ))}
      </View>
    )
  }

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {data.map((day) => {
        return renderItem(day)
      })}
    </View>
  )
}
