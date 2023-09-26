import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Context, {AlarmContextDefaultValue} from './Context';
import Home from './pages/Home'

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
    const [alarms, setAlarms] = React.useState(AlarmContextDefaultValue.alarms);
    const [alarmBeingCreated, setAlarmBeingCreated] = React.useState(AlarmContextDefaultValue.alarmBeingCreated);

    return (
        <Context.Provider value={{alarms, setAlarms, alarmBeingCreated, setAlarmBeingCreated}}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Home" component={Home}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Context.Provider>
    );
}

export default App;
