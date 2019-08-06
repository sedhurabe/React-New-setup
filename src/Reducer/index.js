import { combineReducers } from 'redux';
import GlobalMessage from './globalNotification';
import Language from './Language';

export const rootReducer = combineReducers({
    GlobalMessage,
    Language
})