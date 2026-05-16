import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeHeader from './HomeHeader';
import ModeToggle from './ModeToggle';
import CategorySearch from './CategorySearch';
import ImageSlider from './ImageSlider';
import CategoryChips from './CategoryChips';
import RequestCard from './RequestCard/RequestCard';

const {width, height} = Dimensions.get('window');
const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        <HomeHeader />
        <ImageSlider />
        <ModeToggle />
        <CategorySearch />
        <CategoryChips />
        <RequestCard />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3861',
  },
});
