import * as React from 'react';
import { View } from 'react-native';
import { Divider, List, Switch, Text, useTheme } from 'react-native-paper';

interface AlarmListElementProps {
  time: string;
  description: string;
  isOn: boolean;
  repeat?: string[];
  location?: string;
}

const AlarmListElement: React.FC<AlarmListElementProps> = ({
  time,
  description,
  isOn,
  repeat,
  location,
}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(isOn);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const theme = useTheme();

  return (
    <>
      <Divider bold={true} />
      <List.Item
        title={time}
        description={description + (location ? ` - ${location}` : '')}
        left={() => (
          <List.Icon
            icon="map-marker-outline"
            color={location ? theme.colors.tertiary : 'transparent'}
          />
        )}
        right={() => (
          <View style={{ alignItems: 'flex-end' }}>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            <Text>
              {repeat?.length == 7
                ? 'Diario'
                : repeat?.length == 1
                ? repeat[0]
                : repeat?.map((a) => a.substring(0, 2)).join('-')}
            </Text>
          </View>
        )}
      />
    </>
  );
};

export default AlarmListElement;
