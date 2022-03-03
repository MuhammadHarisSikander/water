/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './Setup';
AppRegistry.registerComponent(appName, () =>App);
