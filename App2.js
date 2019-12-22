/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ExchangeDroid} from './src/App';

const APP_BACKGROUND_COLOR = '#5bdfc3';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={APP_BACKGROUND_COLOR} />
      <SafeAreaView style={styles.safeAreaView}>
        <LinearGradient
          colors={['#5bdfc3', '#2e9696']}
          style={styles.container}>
          <ExchangeDroid />
        </LinearGradient>
      </SafeAreaView>
    </>
  );
};

export const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: APP_BACKGROUND_COLOR},
  container: {
    height: '100%',
    backgroundColor: APP_BACKGROUND_COLOR,
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 60,
    paddingTop: 20,
  },
});

export default App;
