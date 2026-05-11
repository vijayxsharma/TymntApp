import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LinearGradient} from 'react-native-linear-gradient';
import {signInUser, signupuser} from '../../../../../utility/profile/authSlice';

const AuthScreen = () => {
  const [mode, setMode] = useState('signup'); // login | signup
  const dispatch = useDispatch();

  const {loading, error, user} = useSelector(state => state.authSlice);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const userData = {
      name,
      phone,
      email,
      password,
    };
    dispatch(signupuser(userData));
  };

  const handleLogin = ()=>{
    const loginData ={
      email,
      password
    }
    dispatch(signInUser(loginData))
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Logo */}
        <View style={styles.logo}>
          <Text style={styles.logoText}>T</Text>
        </View>

        {/* Heading */}
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          {mode === 'login' ? 'Login to your account' : 'Create your account'}
        </Text>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setMode('login')}>
            <Text
              style={mode === 'login' ? styles.activeTab : styles.inactiveTab}>
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setMode('signup')}>
            <Text
              style={mode === 'signup' ? styles.activeTab : styles.inactiveTab}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        {/* SIGN UP ONLY */}
        {mode === 'signup' && (
          <>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder="Rahul Mehta"
              placeholderTextColor="#6c7a92"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </>
        )}

        {/* Mobile */}
        {mode === 'signup' && (
          <>
            <Text style={styles.label}>Mobile Number</Text>
            <View style={styles.phoneRow}>
              <View style={styles.countryCode}>
                <Text style={{color: '#fff'}}>+91</Text>
              </View>
              <TextInput
                placeholder="9876543210"
                placeholderTextColor="#6c7a92"
                style={styles.phoneInput}
                keyboardType="numeric"
                value={phone}
                onChangeText={setPhone}
              />
            </View>
          </>
        )}

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor="#6c7a92"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor="#6c7a92"
          style={styles.input}
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />

        {/* Button */}
        <TouchableOpacity style={{marginTop: 25}} onPress={mode === 'login' ? handleLogin : handleRegister}>
          <LinearGradient colors={['#3b82f6', '#a855f7']} style={styles.button}>
            <Text style={styles.buttonText}>
              {mode === 'login' ? 'Login' : 'Sign Up'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 20,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 40,
    backgroundColor: '#7c3aed',
    padding: 15,
    borderRadius: 12,
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '600',
  },
  subtitle: {
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  activeTab: {
    color: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#3b82f6',
    paddingBottom: 5,
    fontWeight: '600',
  },
  inactiveTab: {
    color: '#6c7a92',
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
  phoneRow: {
    flexDirection: 'row',
  },
  countryCode: {
    backgroundColor: '#0f172a',
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  phoneInput: {
    flex: 1,
    backgroundColor: '#0f172a',
    borderRadius: 10,
    padding: 12,
    color: '#fff',
  },
  button: {
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
