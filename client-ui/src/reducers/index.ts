import { combineReducers } from "redux";

import { appReducer } from './appReducer';
import { queuesReducer } from './queuesReducer';

export const reducers = combineReducers({
    appState: appReducer,
    queuesState: queuesReducer,
})