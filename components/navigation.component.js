import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Tab, TabView, Text} from '@ui-kitten/components';
import {Games} from './games.component';

export const Navigation = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}>
      <Tab title="Games">
        <Layout style={styles.tabContainer}>
          <Games />
        </Layout>
      </Tab>
    </TabView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
