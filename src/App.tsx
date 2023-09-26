import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Context, { AlarmContextDefaultValue } from './Context';
import Home from './pages/Home';
import CreateAlarm from './pages/CreateAlarm';
import AddActivity from './pages/AddActivity';
import RepeatAlarm from './pages/RepeatAlarm';
import AddLocation from './pages/AddLocation';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [alarms, setAlarms] = React.useState(AlarmContextDefaultValue.alarms);
  const [alarmBeingCreated, setAlarmBeingCreated] = React.useState(
    AlarmContextDefaultValue.alarmBeingCreated
  );

  return (
    <Context.Provider value={{ alarms, setAlarms, alarmBeingCreated, setAlarmBeingCreated }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="CreateAlarm"
            component={CreateAlarm}
            options={{
              animation: 'slide_from_bottom',
              presentation: 'card',
            }}
          />
          <Stack.Screen
            name="AddActivity"
            component={AddActivity}
            options={{
              animation: 'slide_from_right',
              presentation: 'card',
            }}
          />
          <Stack.Screen
            name="RepeatAlarm"
            component={RepeatAlarm}
            options={{
              animation: 'slide_from_right',
              presentation: 'card',
            }}
          />
          <Stack.Screen
            name="AddLocation"
            component={AddLocation}
            options={{
              animation: 'slide_from_right',
              presentation: 'card',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

export default App;
