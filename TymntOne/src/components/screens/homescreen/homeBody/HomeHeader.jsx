import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
  const navigation = useNavigation();

  const handleNotification=()=>{
    navigation.navigate('notifications');
  }
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Icon name="location-sharp" size={18} color="#f6f8f9" />
        <Text style={styles.locationText}>Bengaluru, KA</Text>
      </View>
      <TouchableOpacity style={styles.cart} onPress={handleNotification}>
        <Icon name="heart" size={18} color="#f0f3f6" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 2,
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: "#15274f",
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#fafcfe',
    fontSize: 16,
    marginLeft: 6,
    fontWeight: '500',
  },
  cart:{
    width:40,
    height:40,
    borderRadius:20,
    // borderWidth:1,
    backgroundColor:'#15274f',
    alignItems:'center',
    justifyContent: 'center',
    borderWidth:1,
    borderColor:'white'
  }
});
