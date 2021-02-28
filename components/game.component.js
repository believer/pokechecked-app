import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { GameResult } from './gameResult.component'
import Icon from '../assets/play-icon'
import logos from '../assets/logos'

export const Game = ({ game, navigation }) => {
  const [showResult, setShowResult] = React.useState(false)

  const getLogoName = (name) =>
    `${name.split(' ').slice(-1).pop().toLowerCase()}`

  return (
    <View style={{ marginBottom: 20 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={logos[getLogoName(game.awayTeam)].standard}
          style={{ flex: 1, width: 90, height: 74 }}
        />
        <Text style={{ color: '#fff', flex: 1, textAlign: 'center' }}>
          {game.awayTeam}
        </Text>
        <TouchableOpacity onPress={() => setShowResult(!showResult)}>
          <View
            style={{
              backgroundColor: showResult ? '#fff' : 'transparent',
              borderColor: '#fff',
              borderWidth: 2,
              borderRadius: 100,
              paddingHorizontal: 16,
              paddingVertical: 4,
            }}
          >
            <Text
              style={{
                color: showResult ? '#000' : '#fff',
              }}
            >
              Result
            </Text>
          </View>
        </TouchableOpacity>
        {game.url ? (
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Video', { url: game.url })}
            >
              <View>
                <Icon />
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
        <Text
          style={{
            color: '#fff',
            flex: 1,
            textAlign: 'center',
          }}
        >
          {game.homeTeam}
        </Text>
        <Image
          source={logos[getLogoName(game.homeTeam)].standard}
          style={{ flex: 1, width: 90, height: 74 }}
        />
      </View>
      {game.gameIsFinished && showResult ? (
        <>
          <GameResult game={game} />
        </>
      ) : null}
    </View>
  )
}
