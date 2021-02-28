import React from 'react'
import { View, Text } from 'react-native'

export const Scorer = ({ align = 'left', display, goal }) => {
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
      {goal.assist.length ? (
        goal.assist.map((assist) => (
          <Text
            style={{
              textAlign: align,
              color: '#fff',
              fontSize: 12,
              fontWeight: '400',
            }}
            key={assist.personInfo.id}
          >
            {assist.player.fullName}
          </Text>
        ))
      ) : (
        <Text
          style={{
            textAlign: align,
            color: '#fff',
            fontSize: 12,
            fontWeight: '400',
          }}
        >
          Unassisted
        </Text>
      )}
    </View>
  )
}
