import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeHeader from './homeBody/homeheader/HomeHeader';
import ModeToggle from './homeBody/ModeToggle';
import CategorySearch from './homeBody/CategorySearch';
import ImageSlider from './homeBody/ImageSlider';
import CategoryChips from './homeBody/CategoryChips';
import RequestCard from './homeBody/RequestCard';

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
        {/* <Text style={{color: 'black'}}>Home</Text> */}
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
