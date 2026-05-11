import { Dimensions, StyleSheet, View, Image } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const images = [
  require('../../../../../assets/banners/HouseHoldBuddy.png'),
  require('../../../../../assets/banners/FoodBuddy.png'),
  require('../../../../../assets/banners/DeliveryBuddy2.png'),
  require('../../../../../assets/banners/EmotionalBuddy.png'),
  require('../../../../../assets/banners/ClothsBuddy.png'),
  require('../../../../../assets/banners/QueueBuddy.png'),
  require('../../../../../assets/banners/AssignmentBuddy.png'),
  require('../../../../../assets/banners/SkilledBuddy.png'),
];

const ImageSlider = () => {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width*0.95}
        height={220}
        data={images}
        scrollAnimationDuration={1000}
        autoPlay={true}
        autoPlayInterval={3000}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
  },
  slide: {
    borderRadius: 20,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});