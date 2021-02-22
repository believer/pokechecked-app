import React from 'react';
import {StyleSheet} from 'react-native';
import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Icon,
} from '@ui-kitten/components';

export const TeamSelect = () => {
  const useSelectState = (initialState = undefined) => {
    const [selectedIndex, setSelectedIndex] = React.useState(initialState);
    return {selectedIndex, onSelect: setSelectedIndex};
  };

  const dateSelectState = useSelectState();
  const teamSelectState = useSelectState();

  const StarIcon = (props) => <Icon {...props} name="star" />;

  return (
    <Layout style={styles.rowContainer} level="1">
      <Select style={styles.select} multiSelect={true} {...teamSelectState}>
        <SelectItem accessoryLeft={StarIcon} title="Option 1" />
        <SelectItem accessoryLeft={StarIcon} title="Option 2" />
        <SelectItem accessoryLeft={StarIcon} title="Option 3" />
      </Select>
      <Select
        style={styles.select}
        status="info"
        placeholder="Info"
        {...dateSelectState}>
        <SelectItem title="Option 1" />
        <SelectItem title="Option 2" />
        <SelectItem title="Option 3" />
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  select: {
    flex: 1,
    margin: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
