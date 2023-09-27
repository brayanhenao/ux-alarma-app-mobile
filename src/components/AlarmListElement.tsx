import * as React from 'react';
import { View } from 'react-native';
import {IconButton, Divider, List, Text, useTheme } from 'react-native-paper';

import { Switch } from 'react-native-switch';

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
            {/* <Switch value={isSwitchOn} onValueChange={onToggleSwitch} /> */}
            <Switch
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
              activeText={'On'}
              inActiveText={'Off'}
              circleSize={24}
              barHeight={32}
              circleBorderWidth={0}
              backgroundActive={theme.colors.primary}
              backgroundInactive={"#EDE0DD"} // Not found in theme
              circleActiveColor={theme.colors.onPrimary}
              circleInActiveColor={theme.colors.outline}
              renderInsideCircle={() => <IconButton
                icon={isSwitchOn ? 'check' : 'close'}
                iconColor={isSwitchOn ? theme.colors.onPrimaryContainer : theme.colors.onPrimary}
                size={16}
              />} // custom component to render inside the Switch circle (Text, Image, etc.)
              containerStyle={{ borderColor: isSwitchOn?theme.colors.primary:theme.colors.outline, borderWidth: 3, marginRight: -2 }}
              changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
              innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
              outerCircleStyle={{ }} // style for outer animated circle
              renderActiveText={false}
              renderInActiveText={false}
              switchLeftPx={3} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
              switchWidthMultiplier={2.16} // multiplied by the `circleSize` prop to calculate total width of the Switch
              // switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
            />
            <Text variant="labelMedium">
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
