import * as React from 'react';
import { Keyboard, View } from 'react-native';
import MapView from 'react-native-maps';

import { Button, Card, Divider, List, Searchbar, Text, useTheme } from 'react-native-paper';
import Context from '../Context';

const AddLocation = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedLocation, setSelectedLocation] = React.useState<{
    name?: string;
    address?: string;
  }>();

  const { alarmBeingCreated, setAlarmBeingCreated } = React.useContext(Context);

  const theme = useTheme();

  React.useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [searchQuery]);

  React.useEffect(() => {
    // hide the keyboard
    if (selectedLocation) {
      setSearchQuery('');
      Keyboard.dismiss();
    }
  }, [selectedLocation]);

  const addLocationToAlarm = (location: string) => {
    setAlarmBeingCreated({ ...alarmBeingCreated, location });
    navigation.navigate('CreateAlarm');
  };

  const locations = [
    {
      name: 'Clínica Imbanaco',
      address: 'Cra. 38 #5A-100, Cali, Valle del Cauca',
    },
    {
      name: 'Clínica Fundación Valle del Lili',
      address: 'Cra. 98 #18-49, Cali, Valle del Cauca',
    },
    {
      name: 'Clínica de Occidente',
      address: 'Cra. 98 #18-49, Cali, Valle del Cauca',
    },
  ];

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <Button
          textColor={theme.colors.onSurface}
          onPress={() => navigation.navigate('CreateAlarm')}>
          Cancelar
        </Button>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text variant="titleMedium">Agregar Ubicación</Text>

        <View style={{ width: '90%', marginBottom: 20 }}>
          <View>
            <Searchbar
              placeholder={selectedLocation ? selectedLocation?.name : 'Ubicación'}
              onChangeText={setSearchQuery}
              value={searchQuery}
              icon="map-marker-outline"
              loading={isLoading}
              style={{
                marginVertical: 10,
                borderBottomRightRadius: isLoading || !searchQuery ? undefined : 0,
                borderBottomLeftRadius: isLoading || !searchQuery ? undefined : 0,
              }}
              onPressIn={() => setSelectedLocation(undefined)}
            />
            {isLoading || !searchQuery ? null : (
              <View style={{ gap: -3, position: 'absolute', width: '100%', top: 60, zIndex: 1 }}>
                <Divider bold={true} />
                <List.Section
                  style={{
                    backgroundColor: theme.colors.elevation.level3,
                    borderBottomRightRadius: 25,
                    borderBottomLeftRadius: 25,
                    paddingHorizontal: 15,
                  }}>
                  {locations.map((location, index) => {
                    return (
                      <List.Item
                        key={index}
                        title={location.name}
                        description={location.address}
                        left={() => <List.Icon icon="map-marker-outline" />}
                        onPress={() => setSelectedLocation(location)}
                      />
                    );
                  })}
                </List.Section>
              </View>
            )}
          </View>

          <MapView
            initialCamera={{
              center: {
                latitude: 3.3950644,
                longitude: -76.525664,
              },
              pitch: 0,
              heading: 0,
              altitude: 1000,
              zoom: 12,
            }}
            style={{ height: 400 }}
          />
          <Text variant="labelLarge">Distancia {selectedLocation ? '15' : '0'} km</Text>
          <Text variant="labelLarge">Tiempo Estimado {selectedLocation ? '40' : '0'} min</Text>

          <Card style={{ marginVertical: 20 }}>
            {selectedLocation ? (
              <Card.Content>
                <Text>
                  El cálculo de el tiempo estimado se basa en tu ubicación actual. La alarma volverá
                  a calcular automáticamente el tiempo si tu ubicación ha cambiado.
                </Text>
              </Card.Content>
            ) : null}
          </Card>
        </View>

        <Button
          mode="contained"
          onPress={() => addLocationToAlarm(selectedLocation?.name || '')}
          disabled={!selectedLocation}>
          Guardar
        </Button>
      </View>
    </>
  );
};

export default AddLocation;
