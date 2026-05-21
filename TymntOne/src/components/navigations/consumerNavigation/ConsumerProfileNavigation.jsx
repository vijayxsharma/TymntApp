import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ProviderProfileSetup from '../../screens/ProviderScreen/ProviderProfileSetup';
import ConsumerLandingPage from '../../screens/ConsumerScreen/ConsumerLandingPage';
import ProviderProfileNavigation from '../providerNavigation/ProviderProfileNavigation';
const Stack = createNativeStackNavigator();

const ConsumerProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ConsumerLandingPage" component={ConsumerLandingPage}/>
      <Stack.Screen name="ProviderProfileSetup" component={ProviderProfileSetup}/>
      <Stack.Screen name='ProviderStack' component={ProviderProfileNavigation} />
    </Stack.Navigator>
  );
};

export default ConsumerProfileNavigator;