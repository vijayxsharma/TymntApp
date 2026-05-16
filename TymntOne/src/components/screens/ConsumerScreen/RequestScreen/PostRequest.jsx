import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {getAllRequests, newServiceRequest} from '../../../../utility/serviceRequestSlice';
import { useNavigation } from '@react-navigation/native';

const categories = [
  'Emotional Support',
  'Assignment Buddy',
  'Household Buddy',
  'Food Buddy',
  'Skilled Buddy',
  'Delivery Buddy',
];

const PostRequest = () => {
  const navigation = useNavigation();
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [max_budget, setBudget] = useState('');
  const dispatch = useDispatch();

  const PostNewRequest = async () => {
    if (!description || !category || !max_budget) {
    alert("Please fill all fields");
    return;
  };
    const newRequestData = {
      description,
      category,
      max_budget,
    };
    try {
      await dispatch(newServiceRequest(newRequestData));
      await dispatch(getAllRequests());
      navigation.navigate("Home");
    } catch (error) {
      alert("Failed to post request");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Icon name="chevron-back" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Request</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>What do you need help with right now?</Text>

      {/* Input */}
      <TextInput
        placeholder="Describe your need in detail..."
        placeholderTextColor="#6b7280"
        multiline
        style={styles.input1}
        value={description}
        onChangeText={setDescription}
      />

      {/* Category */}
      <Text style={styles.sectionTitle}>Select Category</Text>
      <View style={styles.wrap}>
        {categories.map((item, index) => {
          const active = category === item;

          return (
            <TouchableOpacity
              key={index}
              style={[styles.chip, active && styles.activeChip]}
              onPress={() => setCategory(item)}>
              <Text style={[styles.chipText, active && styles.activeText]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Budget */}
      <Text style={styles.sectionTitle}>Helping Cost</Text>
      <View style={styles.row}>
        <TextInput
          placeholder="Enter max amout to pay your service provider"
          placeholderTextColor="#6c7a92"
          style={styles.input}
          value={max_budget}
          keyboardType="numeric"
          onChangeText={setBudget}
        />
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={PostNewRequest}>
        <Text style={styles.buttonText}>Find Help Now </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PostRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020c22',
    padding: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#cbd5f5',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#0f172a',
    borderRadius: 10,
    padding: 12,
    color: '#fff',
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input1: {
    backgroundColor: '#0f172a',
    borderRadius: 15,
    padding: 16,
    color: '#fff',
    height: 120,
    marginBottom: 20,
  },

  sectionTitle: {
    color: '#9ca3af',
    marginBottom: 10,
    fontSize: 14,
  },

  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },

  chip: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#111827',
    marginRight: 10,
    marginBottom: 10,
  },

  activeChip: {
    borderWidth: 1,
    borderColor: '#3b82f6',
  },

  greenChip: {
    borderWidth: 1,
    borderColor: '#00ff9d',
  },

  chipText: {
    color: '#cbd5e1',
  },

  activeText: {
    color: '#3b82f6',
  },

  urgencyContainer: {
    flexDirection: 'row',
    backgroundColor: '#111827',
    borderRadius: 15,
    padding: 5,
    marginBottom: 20,
  },

  urgencyBtn: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  activeUrgency: {
    backgroundColor: '#1d4ed8',
  },

  urgencyText: {
    color: '#9ca3af',
  },

  providers: {
    color: '#cbd5e1',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#7c3aed',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 30,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
