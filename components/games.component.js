import React from 'react';
import {GameList} from './gameList.component';
import {SafeAreaView} from 'react-native';
import {TopNavigation} from '@ui-kitten/components';

export const Games = ({navigation}) => (
  <>
    <SafeAreaView>
      <TopNavigation title="Games" />
      <GameList navigation={navigation} />
    </SafeAreaView>
  </>
);
