import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import SplashPage from './src2/containers/SplashPage';
import SignUp from './src2/containers/Signup';
import Login from './src2/containers/Login';
import Home from './src2/containers/Home';
import App2 from './App2'

const App = createStackNavigator(
  {
    SplashPage: {
      screen: SplashPage,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    App2: {
      screen: App2,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(App);
