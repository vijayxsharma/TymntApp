import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone=()=>{
    navigation.navigate('landingpage')
  }
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        pages={[
          {
            backgroundColor: '#ffffff',
            title: 'Tymnt',
            subtitle: 'The human powered time based\n marketplace.\n\nEarn by helping others with your time, skills,\n or presence — anytime, anywhere.',
            image: (
              <View style={styles.iconBox}>
                <Text style={styles.logoText}>T</Text>
              </View>
            ),
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../../../assets/animations/Cleaning.json')}
                  autoPlay
                  loop
                   style={{ width: '100%', height: '100%' }}
                />
              </View>
            ),
            title: 'Help with daily House works',
            subtitle: 'From cleaning and shopping to small \nerrands — earn by helping people with\n everyday work.',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../../../assets/animations/work_stress.json')}
                  autoPlay
                  loop
                   style={{ width: '100%', height: '100%' }}
                />
              </View>
            ),
            title: 'Feeling Stressed With Work?',
            subtitle: 'Take a break. Find someone to help, listen,\n or support you when you need it most.',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../../../assets/animations/flexible_work.json')}
                  autoPlay
                  loop
                   style={{ width: '100%', height: '100%' }}
                />
              </View>
            ),
            title: 'Work On Your Terms',
            subtitle: 'Choose when, where, and how you want\n to earn — full control, zero limits.',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../../../assets/animations/join_us.json')}
                  autoPlay
                  loop
                   style={{ width: '100%', height: '100%' }}
                />
              </View>
            ),
            title: 'Start Earning Today',
            subtitle: 'Join Tymnt and turn your time into opportunity.',
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5A5EFF',
    shadowColor: '#5A5EFF',
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
  logoText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  lottie:{
    width:width*0.9,
    height:width
  }
});
