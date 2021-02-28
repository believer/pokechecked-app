import React from 'react'
import { Image, View, Text } from 'react-native'
import Star from '../assets/star'

const Scorer = ({ align = 'left', display, goal }) => {
  if (!display) {
    return <View style={{ flex: 1 }} />
  }

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: align,
          color: '#fff',
          fontWeight: '700',
        }}
      >
        {goal.scorer.player.fullName}
      </Text>
      {goal.assist.map((assist) => (
        <Text
          style={{ textAlign: align, color: '#fff', fontSize: 12 }}
          key={assist.personInfo.id}
        >
          {assist.player.fullName}
        </Text>
      ))}
    </View>
  )
}

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
          marginVertical: 16,
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
                color: '#fff',
                textAlign: 'center',
                fontWeight: '700',
              }}
            >
              {goal.time}
            </Text>
            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 12 }}>
              {goal.period}
            </Text>
          </View>
          <Scorer goal={goal} display={goal.homeTeamScored} />
        </View>
      ))}

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {stars.map((star, index) => (
          <View key={star.id} style={{ flex: 1 }}>
            <Image
              source={{ uri: star.image }}
              style={{ flex: 1, width: 40, height: 40, borderRadius: 150 / 2 }}
            />
            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 12 }}>
              {star.fullName}
            </Text>
            <Star />
          </View>
        ))}
      </View>
    </>
  )
}
