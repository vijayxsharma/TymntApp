import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import ProviderProfileNavigation from '../../navigations/providerNavigation/ProviderProfileNavigation';
import {createServiceProvider} from '../../../utility/providerSlice/serviceProviderSlice';

const ProviderProfileSetup = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [tagLine, setTagLine] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmitProviderProfile = () => {
    dispatch(
      createServiceProvider({
        tagLine,
        bio,
      }),
    );
    navigation.navigate('ProviderStack');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* FORM */}
        <View style={styles.formContainer}>
          {/* TITLE */}
          <Text style={styles.label}>Professional Title</Text>

          <View style={styles.inputContainer}>
            <Icon name="briefcase-outline" size={20} color="#94A3B8" />

            <TextInput
              placeholder="Life Coach, Fitness Buddy..."
              placeholderTextColor="#64748B"
              style={styles.input}
              value={tagLine}
              onChangeText={setTagLine}
            />
          </View>

          {/* ABOUT */}
          <Text style={styles.label}>About You</Text>

          <View style={[styles.inputContainer, styles.textAreaContainer]}>
            <TextInput
              placeholder="Describe your experience, skills, and how you can help people..."
              placeholderTextColor="#64748B"
              multiline
              numberOfLines={6}
              value={bio}
              onChangeText={setBio}
              style={styles.textArea}
            />
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM BUTTON */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleSubmitProviderProfile}>
            <LinearGradient
              colors={['#B400FF', '#2E6BFF']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.saveBtn}>
              <Text style={styles.saveBtnText}>Complete Provider Profile</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProviderProfileSetup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },

  formContainer: {
    padding: 20,
  },

  label: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 14,
    marginTop: 28,
  },

  inputContainer: {
    height: 58,
    backgroundColor: '#111827',
    borderRadius: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1F2937',
  },

  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 12,
    fontSize: 16,
  },

  textAreaContainer: {
    height: 150,
    alignItems: 'flex-start',
    paddingTop: 16,
  },

  textArea: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
    textAlignVertical: 'top',
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#020617',
  },

  saveBtn: {
    height: 62,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  saveBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
