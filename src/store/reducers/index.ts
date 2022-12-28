import { combineReducers } from 'redux';
import { configReducer, ConfigState } from './config';

export type RootReducer = {
  config: ConfigState;
}

export const rootReducer = combineReducers({
  config: configReducer,
});
