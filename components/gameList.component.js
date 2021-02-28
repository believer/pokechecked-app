import React from 'react'
import { useQuery } from 'react-query'
import { View, Text, ScrollView } from 'react-native'
import { getHighlights } from '@jimjardland/nhl'
import { Game } from './game.component'

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
        <Text
          style={{ color: '#fff', flex: 1, fontWeight: '700', marginLeft: 30 }}
        >
          {data.day}
        </Text>
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
