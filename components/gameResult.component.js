import React from 'react'
import { Card, Text, Button } from '@ui-kitten/components'
import { Image } from 'react-native'

export const GameResult = ({
  game: { stars, scorers, homeGoals, awayGoals },
}) => {
  return (
    <>
      <Text>
        {awayGoals} - {homeGoals}
      </Text>

      {scorers.map((goal) => {
        return (
          <Card key={goal.time}>
            <Text>{goal.scorer.player.fullName}</Text>
            <Text>
              {goal.period} - {goal.time}
            </Text>
            {goal.assist.map((assist) => (
              <Text key={assist.personInfo.id}>{assist.player.fullName}</Text>
            ))}
          </Card>
        )
      })}

      {stars.map((star) =>
        star.id ? (
          <Card key={star.id}>
            <Image uri={star.image} style={{ width: 40, height: 40 }} />
            <Text>{star.fullName}</Text>
          </Card>
        ) : null
      )}
    </>
  )
}
