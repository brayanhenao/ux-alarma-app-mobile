import * as React from 'react';
import { View } from 'react-native';

import { Button, List, Text, Divider, useTheme } from 'react-native-paper';
import Context from '../Context';

const AddActivity = ({ navigation }) => {
  const activityList = ['Cita Médica', 'Medicina', 'Pico y Placa'];

  const { alarmBeingCreated, setAlarmBeingCreated } = React.useContext(Context);

  const theme = useTheme();

  const addActivityToAlarm = (activity: string) => {
    setAlarmBeingCreated({ ...alarmBeingCreated, activity });
    navigation.navigate('CreateAlarm');
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <Button textColor={theme.colors.onSurface} onPress={() => navigation.navigate('CreateAlarm')}>Cancelar</Button>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text variant="titleMedium">Agregar Actividad</Text>

        <View style={{ width: '90%' }}>
          {activityList.map((activity, index) => (
            <>
              <List.Item
                key={index+'activity'}
                title={activity}
                onPress={() => addActivityToAlarm(activity)}
              />
              <Divider />
            </>
          ))}
        </View>
      </View>
    </>
  );
};

export default AddActivity;
