import * as React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';

export default function GangwhaSplash() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar hidden />

      <Image
        source={require('../images/splash.png')}
        style={{resizeMode: 'contain'}}></Image>
    </View>
  );
}
