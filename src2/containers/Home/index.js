import React from 'react';
import {StyleSheet, Platform, Image, Text, View} from 'react-native';
import firebase from 'react-native-firebase';
export default class Home extends React.Component {
  state = {currentUser: null};
  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
  }
  render() {
    const {currentUser} = this.state;
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25}}>Merhaba </Text>
        <Text style={{color: 'blue', fontSize: 25}}>
          {currentUser && currentUser.email}
        </Text>
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
