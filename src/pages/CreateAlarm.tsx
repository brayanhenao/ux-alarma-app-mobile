import * as React from 'react';
import { View } from 'react-native';

import { Button, Divider, List, Text, TextInput, useTheme } from 'react-native-paper';
import TimePicker from '../components/TimePicker';
import { DatePickerModal } from 'react-native-paper-dates';
import Context from '../Context';

const CreateAlarm = ({ navigation }) => {
  const [openDatePicker, setOpenDatePicker] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const { alarmBeingCreated, setAlarmBeingCreated, alarms, setAlarms } = React.useContext(Context);

  const theme = useTheme();

  const onDismissSingle = React.useCallback(() => {
    setOpenDatePicker(false);
  }, [setOpenDatePicker]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpenDatePicker(false);
      setDate(params.date);
    },
    [setOpenDatePicker, setDate]
  );

  const onAlarmTimeChange = (time: string) => {
    setAlarmBeingCreated({ ...alarmBeingCreated, time });
  };

  const saveAlarm = () => {
    const alarmsClone = [...alarms, { ...alarmBeingCreated, isOn: true }].sort((a, b) => {
      a.time = a.time || '00:00 AM';
      b.time = b.time || '00:00 AM';

      const aTime = a.time.split(' ')[0];
      const bTime = b.time.split(' ')[0];

      const aTimeSplit = aTime.split(':');
      const bTimeSplit = bTime.split(':');
      const aHour = parseInt(aTimeSplit[0]);
      const bHour = parseInt(bTimeSplit[0]);
      const aMinute = parseInt(aTimeSplit[1]);
      const bMinute = parseInt(bTimeSplit[1]);
      const aIsAM = a.time.split(' ')[1] === 'AM';
      const bIsAM = b.time.split(' ')[1] === 'AM';

      if (aIsAM && !bIsAM) {
        return -1;
      }
      if (!aIsAM && bIsAM) {
        return 1;
      }

      if (aHour < bHour) {
        return -1;
      }

      if (aHour > bHour) {
        return 1;
      }

      if (aMinute < bMinute) {
        return -1;
      }

      if (aMinute > bMinute) {
        return 1;
      }

      return 0;
    });

    setAlarms(alarmsClone);
    setAlarmBeingCreated({});
    navigation.navigate('Home');
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <Button
          onPress={() => {
            navigation.navigate('Home');
            setAlarmBeingCreated({});
          }}>
          Cancelar
        </Button>
        <Button onPress={saveAlarm}>Guardar</Button>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text variant="titleMedium">Crear Alarma</Text>

        <View style={{ width: '90%' }}>
          <List.Item
            title="Agregar Actividad"
            description={alarmBeingCreated?.activity}
            right={() => <List.Icon icon="chevron-right" />}
            onPress={() => navigation.navigate('AddActivity')}
          />
          <Divider />
          {alarmBeingCreated?.activity ? (
            <>
              <List.Item
                title="Agregar Ubicación"
                description={alarmBeingCreated?.location}
                right={() => <List.Icon icon="chevron-right" />}
                onPress={() => navigation.navigate('AddLocation')}
              />
              <Divider />
            </>
          ) : null}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <TimePicker initialValue={alarmBeingCreated?.time} onChange={onAlarmTimeChange} />
            <Button onPress={() => setOpenDatePicker(true)}>
              {date.toLocaleDateString('en-GB')}
            </Button>
            <DatePickerModal
              locale="en"
              mode="single"
              visible={openDatePicker}
              onDismiss={onDismissSingle}
              date={date}
              onConfirm={onConfirmSingle}
            />
          </View>
          <List.Item
            title="Repetir"
            description={
              alarmBeingCreated
                ? alarmBeingCreated?.repeat?.map((a) => a.substring(0, 2)).join('-')
                : ''
            }
            right={() => <List.Icon icon="chevron-right" />}
            onPress={() => navigation.navigate('RepeatAlarm')}
          />
          <Divider />

          <TextInput
            mode="outlined"
            label="Etiqueta"
            value={alarmBeingCreated?.description}
            onChangeText={(description) =>
              setAlarmBeingCreated({ ...alarmBeingCreated, description })
            }
            style={{ marginVertical: 10, backgroundColor: theme.colors.elevation.level0 }}
          />
        </View>
      </View>
    </>
  );
};

export default CreateAlarm;
