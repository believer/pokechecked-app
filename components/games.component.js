import React from 'react';
import {GameList} from './gameList.component';
import {TeamSelect} from './teamSelect.component';
import {Footer} from './footer.component';

export const Games = () => (
  <>
    <TeamSelect />
    <GameList />
    <Footer />
  </>
);
