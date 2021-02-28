import React from 'react'
import { List, Layout } from '@ui-kitten/components'
import { useQuery } from 'react-query'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
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
      <Layout key={data.item.index}>
        <Text style={{ color: '#fff', flex: 1 }}>{data.item.day}</Text>
        {data.item.games.map((game) => (
          <Game key={game.arena} game={game} navigation={navigation} />
        ))}
      </Layout>
    )
  }

  return <List data={data} renderItem={renderItem} />
}
