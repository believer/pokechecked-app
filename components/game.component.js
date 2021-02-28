import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { GameResult } from './gameResult.component'
import Icon from '../assets/play-icon'
import logos from '../assets/logos'
import Clock from '../assets/clock'
import moment from 'moment'

export const Game = ({ game, navigation, index }) => {
  const [showResult, setShowResult] = React.useState(false)

  const getLogoName = (name) =>
    `${name.split(' ').slice(-1).pop().toLowerCase()}`

  return (
    <View
      style={{
        paddingBottom: 40,
        backgroundColor: index % 2 == 0 ? 'rgba(20,9,51,0.2)' : null,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'column',
          }}
        >
          <Image
            source={logos[getLogoName(game.awayTeam)].standard}
            style={{ flex: 1 }}
          />
          <Text
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontWeight: '700',
            }}
          >
            {game.awayTeam}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
          }}
        >
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
          {game.gameIsFinished ? (
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
          ) : (
            <Text
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontWeight: '700',
              }}
            >
              <Clock />
              {moment(game.date).format('HH:mm')}
            </Text>
          )}
        </View>

        <View
          style={{
            flexDirection: 'column',
          }}
        >
          <Image
            source={logos[getLogoName(game.homeTeam)].standard}
            style={{ flex: 1 }}
          />
          <Text
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontWeight: '700',
            }}
          >
            {game.homeTeam}
          </Text>
        </View>
      </View>
      {game.gameIsFinished && showResult ? (
        <>
          <GameResult game={game} />
        </>
      ) : null}
    </View>
  )
}
