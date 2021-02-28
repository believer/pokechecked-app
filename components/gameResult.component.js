import React from 'react'
import { Image, View, Text } from 'react-native'
import Star from '../assets/star'
import { Scorer } from './scorer.component'

export const GameResult = ({
  game: { stars, scorers, homeGoals, awayGoals },
}) => {
  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontWeight: '700',
          paddingBottom: 14,
        }}
      >
        {awayGoals} - {homeGoals}
      </Text>

      {scorers.map((goal) => (
        <View style={{ flexDirection: 'row', marginBottom: 12 }} key={goal.id}>
          <Scorer goal={goal} display={!goal.homeTeamScored} align="right" />
          <View style={{ marginHorizontal: 12 }}>
            <Text
              style={{
                color: '#8975C0',
                textAlign: 'center',
                fontWeight: '700',
              }}
            >
              {goal.time}
            </Text>
            <Text
              style={{ color: '#8975C0', textAlign: 'center', fontSize: 12 }}
            >
              {goal.period}
            </Text>
          </View>
          <Scorer goal={goal} display={goal.homeTeamScored} />
        </View>
      ))}

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {stars.map((star, i) => (
          <View key={star.id} style={{ padding: 14 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Image
                source={{ uri: star.image }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 150 / 2,
                  justifyContent: 'center',
                }}
              />
            </View>
            <Text
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontWeight: '400',
              }}
            >
              {star.fullName.split(' ')[1]}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop: 4,
              }}
            >
              {new Array(i + 1).fill(0).map((_) => (
                <Star />
              ))}
            </View>
          </View>
        ))}
      </View>
    </>
  )
}
