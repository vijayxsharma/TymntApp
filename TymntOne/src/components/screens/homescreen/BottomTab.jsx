import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import PostRequest from '../RequestScreen/PostRequest';
import Explore from './Explore';
import Home from './Home';
import Chat from './Chat';
import ProfileScreen from '../ConsumerScreen/ConsumerProfile/consumerProfile';
import AuthScreen from '../ProfileScreen/AuthScreen';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const {isAuthenticated} = useSelector(state => state.authSlice);
  {
    console.log(isAuthenticated);
  }
  const getTabBarIcons = (routeName, focused, color, size) => {
    let iconName;

    if (routeName === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (routeName === 'Engagements') {
      iconName = focused ? 'sync' : 'sync-outline';
    } else if (routeName === 'Request') {
      iconName = focused ? 'add-circle' : 'add-circle-outline';
    } else if (routeName === 'Chat') {
      iconName = focused ? 'chatbubble' : 'chatbubble-outline';
    } else if (routeName === 'Profile') {
      iconName = focused ? 'person' : 'person-outline';
    }

    return <Icon name={iconName} size={size} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarIcon: ({focused, color, size}) =>
          getTabBarIcons(route.name, focused, color, size),

        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'grey',

        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Engagements" component={Explore} />
      <Tab.Screen name="Request" component={PostRequest} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen
        name="Profile"
        component={isAuthenticated ? ProfileScreen : AuthScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
