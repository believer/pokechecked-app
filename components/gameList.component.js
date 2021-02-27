import React from 'react';
import {List, Text, Layout, Button} from '@ui-kitten/components';
import {useQuery} from 'react-query';
import {getHighlights} from '@jimjardland/nhl';
import {Game} from './game.component';

export const GameList = ({navigation}) => {
  const {isLoading, isError, error, data} = useQuery('highlights', () =>
    getHighlights(),
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!data) {
    return <Text>Missing data</Text>;
  }

  const renderItem = (data) => {
    return (
      <Layout key={data.item.index}>
        <Text>Datum {data.item.day}</Text>
        <Button onPress={() => console.log('tje')}>Results</Button>
        {data.item.games.map((game) => {
          return <Game key={game.arena} game={game} navigation={navigation} />;
        })}
      </Layout>
    );
  };

  return <List data={data} renderItem={renderItem} />;
};
