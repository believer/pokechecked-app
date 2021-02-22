import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, List, Text, Layout} from '@ui-kitten/components';
import {getHighlights} from '@jimjardland/nhl';

const data = [
  new Array(2).fill({
    title: 'Itemb',
  }),
  new Array(2).fill({
    title: 'Itema',
  }),
];

export const GameList = () => {
  const renderItem = (days) => {
    console.log('tja', days);
    return (
      <Layout key={days.index}>
        <Text>Datum {days.index}</Text>
        {days.item.map((info) => {
          return (
            <Card
              key={info.title + Math.random()}
              style={styles.item}
              status="basic">
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Text>
            </Card>
          );
        })}
      </Layout>
    );
  };

  return (
    <>
      <List
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={renderItem}
      />
    </>
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
});
