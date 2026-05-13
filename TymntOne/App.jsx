import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigation from './src/components/navigations/AppNavigation';
import { Provider, useDispatch } from 'react-redux';
import { store } from './src/utility/store';
import { useEffect } from 'react';
import { loadUser } from './src/utility/profile/authSlice';

const Main = ()=>{
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadUser())
  },[]);
  return <AppNavigation/>
}

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
