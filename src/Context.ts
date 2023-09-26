import React from 'react';

const initialAlarms = [
  {
    time: '07:00 AM',
    description: 'Despertar',
    isOn: true,
    repeat: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi'],
  },
  {
    time: '07:30 AM',
    description: 'Despertar',
    isOn: false,
    repeat: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
  },
  {
    time: '08:00 AM',
    description: 'Tomar medicamento',
    isOn: true,
    repeat: ['Lu', 'Mi', 'Vi'],
  },
  {
    time: '02:00 PM',
    description: 'Cita con el doctor',
    isOn: true,
    location: 'Clínica Valle del Lili',
  },
];

interface Alarm {
  time: string;
  description: string;
  isOn: boolean;
  location?: string;
  repeat?: string[];
  activity?: string;
}

export interface AlarmContextType {
  alarms: Alarm[];
  setAlarms: (alarms: Partial<Alarm>[]) => void;
  alarmBeingCreated: Partial<Alarm>;
  setAlarmBeingCreated: (alarm: Partial<Alarm>) => void;
}

export const AlarmContextDefaultValue: AlarmContextType = {
  alarms: initialAlarms,
  setAlarms: () => {},
  alarmBeingCreated: {},
  setAlarmBeingCreated: () => {},
};

const AlarmContext = React.createContext<AlarmContextType>(AlarmContextDefaultValue);

export default AlarmContext;
