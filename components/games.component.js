import React from 'react';
import {GameList} from './gameList.component';
import {TeamSelect} from './teamSelect.component';
import {Footer} from './footer.component';
import {SafeAreaView} from 'react-native';
import {TopNavigation} from '@ui-kitten/components';

export const Games = ({navigation}) => (
  <>
    <SafeAreaView>
      <TopNavigation title="Games" />
      <TeamSelect />
      <GameList navigation={navigation} />
      <Footer />
    </SafeAreaView>
  </>
);
