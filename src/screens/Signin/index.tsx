import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import SplashImage from '../../assets/illustration.png';

export function Signin() {
  return (
    <View style={styles.container}>
      <Image source={SplashImage} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize suas jogatinas
        </Text>
      </View>
    </View>
  );
}
