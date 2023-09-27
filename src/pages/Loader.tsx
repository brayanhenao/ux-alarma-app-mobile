import * as React from 'react';
import { View, Animated } from 'react-native';

import { ActivityIndicator } from 'react-native-paper';

import Logo from '../components/Logo';

const Loader = ({ navigation }) => {
  const scaleAnim = React.useRef(new Animated.Value(0)).current;
  const opacityAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('Home');
      });
    });
  }, [scaleAnim, opacityAnim]);

  return (
    <Animated.View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        gap: 20,
        transform: [
          {
            scale: scaleAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ],
      }}>
      <Logo />
      <Animated.View
        style={{
          opacity: opacityAnim,
        }}>
        <ActivityIndicator size="large" />
      </Animated.View>
    </Animated.View>
  );
};

export default Loader;
