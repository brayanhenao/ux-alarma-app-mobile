import * as React from 'react';
import { View } from 'react-native';

import { Button, List, Text, Divider, TextInput } from 'react-native-paper';
import Context from '../Context';

const AddActivity = ({ navigation }) => {
    const ActivityList = ["Cita Médica", "Medicina", "Pico y Placa"]

    const {alarmBeingCreated, setAlarmBeingCreated} = React.useContext(Context);

    const addActivityToAlarm = (activity: string) => {
        setAlarmBeingCreated({...alarmBeingCreated, activity})
        navigation.navigate('CreateAlarm')
    }


    return (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                }}
            >
                <Button onPress={() => navigation.navigate('CreateAlarm')}>Cancelar</Button>
            </View>
            <View
                style={{
                    alignItems: 'center',
                }}
            >
                <Text variant='titleMedium'>Agregar Actividad</Text>

                <View style={{ width: "90%" }}>
                    {ActivityList.map((activity, index) =>
                            <>
                                <List.Item
                                    key={index}
                                    title={activity}
                                    onPress={() => addActivityToAlarm(activity)}
                                />
                            <Divider />
                            </>
                        )
                    }
                </View>
            </View>
        </>
    )

}

export default AddActivity
