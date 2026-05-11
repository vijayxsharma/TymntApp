import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const categories = [
  'All',
  'food',
  'skilled',
  'cloths',
  'queue',
  'assignment',
  'tasks',
  'counselling',
];
const CategoryChips = () => {
  const [active, setActive] = useState('All');

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container1}>
        {categories.map((item, index) => {
          const isActive = active === item;

          return (
            <TouchableOpacity
              key={index}
              style={[styles.chip, isActive && styles.activeChip]}
              onPress={() => setActive(item)}>
              <Text style={[styles.text, isActive && styles.activeText]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryChips;

const styles = StyleSheet.create({
  container1: {
    flexGrow: 1,
    height: 60,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 6,
  },

  chip: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#1E293B',
  },

  activeChip: {
    backgroundColor: '#E5E7EB',
  },

  text: {
    color: '#CBD5F5',
    fontSize: 14,
    fontWeight: '500',
  },

  activeText: {
    color: '#000',
    fontWeight: '600',
  },
});
