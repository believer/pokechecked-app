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
          marginTop: 16,
        }}
      >
        {awayGoals} - {homeGoals}
      </Text>

      {scorers.map((goal, i) => (
        <View style={{ flexDirection: 'row', marginBottom: 12 }} key={i}>
          <Scorer goal={goal} display={!goal.homeTeamScored} align="right" />
          <View style={{ marginHorizontal: 12 }}>
            <Text
              style={{
                color: '#8975C0',
                textAlign: 'center',
                fontFamily: 'ZillaSlab-Bold',
                fontSize: 13,
              }}
            >
              {goal.time}
            </Text>
            <Text
              style={{
                color: '#8975C0',
                textAlign: 'center',
                fontFamily: 'ZillaSlab-Regular',
                fontSize: 13,
              }}
            >
              {goal.period}
            </Text>
          </View>
          <Scorer goal={goal} display={goal.homeTeamScored} />
        </View>
      ))}

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {stars.map((star, i) => (
          <View key={i} style={{ padding: 14 }}>
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
                marginTop: 2,
                fontSize: 13,
                fontFamily: 'ZillaSlab-Bold',
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
              {new Array(i + 1).fill(0).map((_, i) => (
                <Star key={i} />
              ))}
            </View>
          </View>
        ))}
      </View>
    </>
  )
}
