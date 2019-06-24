import { combineReducers } from 'redux';

import authReducer from './auth';
import eventReducer from './eventReducer';
import teamReducer from './teamReducer';
import vendorReducer from './vendorReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    events: eventReducer,
    teams: teamReducer,
    vendors: vendorReducer,
    todos: todoReducer
});

export default rootReducer;