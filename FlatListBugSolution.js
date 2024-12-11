// FlatListBugSolution.js
import React, { useMemo } from 'react';
import { FlatList, Text, View, StyleSheet, SectionList } from 'react-native';

const DATA = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  title: `Item ${i}`,
  description: `This is item number ${i}. It has a long description to make rendering slower.`
}));

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text>{item.description}</Text>
  </View>
);

const ItemSeparator = () => (
  <View style={styles.separator} />
);

const FlatListBugSolution = () => {
  const memoizedItems = useMemo(() => DATA, []); //Memoized data to avoid redundant calculation

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <FlatList
      data={memoizedItems}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FlatListBugSolution;