/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Database } from '@nozbe/watermelondb';
import Movie from './src/watermelon/model/Movie';
import mySchema from './src/watermelon/model/schema';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

const adapter = new SQLiteAdapter({
  dbName: 'database',
  schema: mySchema
})

const database = new Database({
  adapter,
  modelClasses: [Movie],
  actionsEnabled: true
});

global.database = database;

AppRegistry.registerComponent(appName, () => App);
