import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text, Button} from '@ui-kitten/components';
import {GameResult} from './gameResult.component';

export const Game = ({game, navigation}) => {
  return (
    <Card key={game.arena} style={styles.item} status="basic">
      <Text>
        {game.homeTeam} - {game.awayTeam}
      </Text>
      {game.url ? (
        <>
          <Button onPress={() => navigation.navigate('Video', {url: game.url})}>
            Play video
          </Button>
        </>
      ) : null}
      {game.gameIsFinished ? (
        <>
          <Button onPress={() => console.log('tja')}>Result</Button>
          <GameResult game={game} />
        </>
      ) : null}
    </Card>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: 'black',
  },

  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
