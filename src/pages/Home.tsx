import React, { useContext } from 'react';
import { IconButton, Text } from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import AlarmListElement from '../components/AlarmListElement';
import LogoSimple from '../components/LogoSimple';
import Context from '../Context';

function App({ navigation }: any) {
  const { alarms } = useContext(Context);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    marginHorizontal: 10,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <LogoSimple width={50}/>
          <IconButton
            icon="plus"
            size={30}
            onPress={() => navigation.navigate('CreateAlarm')}
            style={{
              marginTop: 10,
              marginLeft: 10,
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text variant="titleMedium">Mis Alarmas</Text>

          <View
            style={{
              width: '90%',
              marginTop: 20,
            }}>
            {alarms.map((alarm, index) => (
              <AlarmListElement
                key={index}
                description={alarm.description}
                time={alarm.time}
                isOn={alarm.isOn}
                location={alarm.location}
                repeat={alarm.repeat}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
