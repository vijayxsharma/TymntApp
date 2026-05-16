import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {requestFilter} from '../../../utility/serviceRequestSlice';

const {width, height} = Dimensions.get('window');
const categories = [
  'All',
  'Household',
  'skilled',
  'cloths',
  'queue',
  'assignment',
  'tasks',
  'counselling',
];
const CategoryChips = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState('All');

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container1}>
        {categories.map((item, index) => {
          const isActive = active === item;
          const handleFilter = item => {
            setActive(item);

            if (item === 'All') {
              dispatch(
                requestFilter({
                  category: '',
                  search: '',
                }),
              );
            } else {
              dispatch(
                requestFilter({
                  category: item,
                  search: '',
                }),
              );
            }
          };
          return (
            <TouchableOpacity
              key={index}
              style={[styles.chip, isActive && styles.activeChip]}
              onPress={() => handleFilter(item)}>
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
