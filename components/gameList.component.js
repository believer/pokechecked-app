import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, List, Text, Layout, Button, Modal} from '@ui-kitten/components';
import {useQuery} from 'react-query';
import {getHighlights} from '@jimjardland/nhl';

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
        {data.item.games.map((game) => {
          return (
            <Card key={game.arena} style={styles.item} status="basic">
              <Text>
                {game.homeTeam} - {game.awayTeam}
                {game.url}
              </Text>
              {game.url ? (
                <Button
                  onPress={() => navigation.navigate('Video', {url: game.url})}>
                  Play video
                </Button>
              ) : null}
            </Card>
          );
        })}
      </Layout>
    );
  };

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItem}
    />
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
