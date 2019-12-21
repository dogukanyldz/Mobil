import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

export const CurrencySelectButton = ({current, onPress, small}) => {
  return (
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 7,
      }}>
      <LinearGradient
        colors={['black', '#e2e2e2']}
        style={{
          zIndex: 1,
          width: small ? 70 : 100,
          height: small ? 70 : 100,
          borderRadius: 50,
          marginRight: 20,

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onPress}
          style={[
            {
              zIndex: 1,
              backgroundColor: 'white',
              borderRadius: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0,
              width: small ? 55 : 85,
              height: small ? 55 : 85,
              margin: 0,
              alignSelf: 'center',
              shadowOpacity: 0,
            },
          ]}>
          {small ? (
            <Icon name="refresh-cw" color="rgba(46, 150, 150, 0.6)" size={28} />
          ) : (
            <Text
              style={{
                fontSize: 26,
                fontFamily: 'SFUIDisplay-Light',
                color: '#2e9696',
                fontWeight: '200',
              }}>
              {current}
            </Text>
          )}
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
