import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { GameResult } from './gameResult.component'
import Icon from '../assets/play-icon'
import logos from '../assets/logos'
import Clock from '../assets/clock'
import Fold from '../assets/fold'
import moment from 'moment'

export const Game = ({ game, navigation, index }) => {
  const [showResult, setShowResult] = React.useState(false)

  const getLogoName = (name) =>
    `${name.split(' ').slice(-1).pop().toLowerCase()}`

  return (
    <View
      style={{
        padding: 30,
        backgroundColor: index % 2 == 1 ? 'rgba(20,9,51,0.2)' : null,
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
              fontFamily: 'ZillaSlab-SemiBold',
              fontSize: 14,
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
            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                justifyContent: 'center',
              }}
            >
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
                  marginTop: 30,
                }}
              >
                <Text
                  style={{
                    color: showResult ? '#2A146A' : '#fff',
                    fontFamily: 'Barlow-Bold',
                    fontSize: 13,
                  }}
                >
                  {showResult ? <Fold /> : null}
                  RESULT
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <Clock style={{ flex: 1, marginTop: 3 }} />
              <Text
                style={{
                  color: '#FFF',
                  textAlign: 'center',
                  marginLeft: 5,
                  marginTop: 0,
                  fontSize: 13,
                  fontFamily: 'Barlow-SemiBold',
                }}
              >
                {moment(game.date).format('HH:mm')}
              </Text>
            </View>
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
              fontFamily: 'ZillaSlab-SemiBold',
              fontSize: 14,
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
