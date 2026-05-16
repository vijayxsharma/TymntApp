import React from 'react';
import {useState} from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {requestFilter} from '../../../utility/serviceRequestSlice';

const {width, height} = Dimensions.get('window');
const CategorySearch = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const handleSearch = text => {
    setSearch(text);
    dispatch(
      requestFilter({
        category: '',
        search: text,
      }),
    );
  };
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.container}>
        <Icon name="search" size={18} color="#00050a" style={styles.icon} />
        <TextInput
          placeholder="What do you need help with right now?"
          placeholderTextColor="#696d74"
          style={styles.input}
          value={search}
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
};

export default CategorySearch;

const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
    paddingHorizontal: 14,
    height: 50,
    backgroundColor: '#fdfdfd',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  icon: {
    marginRight: 10,
    fontSize: 23,
  },
  input: {
    flex: 1,
    color: '#010000',
    fontSize: 14,
  },
});
