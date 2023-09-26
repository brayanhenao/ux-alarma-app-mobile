import * as React from 'react';
import { View } from 'react-native';

import { Button, Checkbox, Divider, List, Text } from 'react-native-paper';
import Context from '../Context';

const RepeatAlarm = ({ navigation }: any) => {
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const [daysOfWeekChecked, setDaysOfWeekChecked] = React.useState(daysOfWeek.map(() => false));

  const { alarmBeingCreated, setAlarmBeingCreated } = React.useContext(Context);

  const addRepeatToAlarm = () => {
    const repeat = daysOfWeekChecked
      .map((day, index) => {
        if (day) {
          return daysOfWeek[index];
        }
      })
      .filter((day) => day) as string[];
    if (repeat.length) {
      setAlarmBeingCreated({ ...alarmBeingCreated, repeat });
    }
    navigation.navigate('CreateAlarm');
  };

  const setDayOfWeekChecked = (index: number) => {
    setDaysOfWeekChecked(
      daysOfWeekChecked.map((day, i) => {
        if (i === index) {
          return !day;
        }
        return day;
      })
    );
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <Button onPress={() => navigation.navigate('CreateAlarm')}>Cancelar</Button>
        <Button onPress={addRepeatToAlarm}>Guardar</Button>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text variant="titleMedium">Repetir Alarma</Text>

        <View style={{ width: '90%' }}>
          <List.Item title="Diario" />
          <Divider />
          <List.Item title="Semanalmente" />
          <View
            style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20, gap: 10 }}>
            {daysOfWeek.map((day, index) => {
              return (
                <View style={{ alignItems: 'center' }} key={index}>
                  <Checkbox
                    status={daysOfWeekChecked[index] ? 'checked' : 'unchecked'}
                    onPress={() => setDayOfWeekChecked(index)}
                  />
                  <Text>{day.substring(0, 2)}</Text>
                </View>
              );
            })}
          </View>

          <Divider />
          <List.Item title="Mensualmente" />
          <Divider />
          <List.Item title="Anualmente" />
          <Divider />
        </View>
      </View>
    </>
  );
};

export default RepeatAlarm;
