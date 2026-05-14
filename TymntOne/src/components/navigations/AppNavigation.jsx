import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../onboarding/OnboardingScreen';
import BottomTab from '../screens/homescreen/BottomTab';
import NotificationsScreen from '../screens/NotificationScreen/Notification';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onboarding">
        <Stack.Screen
          name="onboarding"
          options={{headerShown: false}}
          component={Onboarding}
        />
        <Stack.Screen
          name="landingpage"
          options={{headerShown: false}}
          component={BottomTab}
        />
        <Stack.Screen
          name="notifications"
          options={{headerShown: false}}
          component={NotificationsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
