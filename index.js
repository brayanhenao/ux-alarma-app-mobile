/**
 * @format
 */

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { en, registerTranslation } from 'react-native-paper-dates'
import {enableLatestRenderer} from 'react-native-maps';

import { name as appName } from './app.json';

import App from './src/App';
import { lightTheme, darkTheme } from './theme';


registerTranslation('en', en)
enableLatestRenderer();

export default function Main() {
  return (
    <PaperProvider theme={lightTheme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);