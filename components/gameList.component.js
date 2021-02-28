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
      <View key={data.day}>
        <Text style={{ color: '#fff', flex: 1 }}>{data.day}</Text>
        {data.games.map((game) => (
          <Game key={game.arena} game={game} navigation={navigation} />
        ))}
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
        {data.map((day) => {
          return renderItem(day)
        })}
      </View>
    </ScrollView>
  )
}
