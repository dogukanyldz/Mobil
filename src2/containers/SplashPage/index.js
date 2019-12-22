import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';
export default class SplashPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Home' : 'SignUp');
      });
    }, 1800);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'blue', fontSize: 40}}>Merhaba Firebase</Text>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
