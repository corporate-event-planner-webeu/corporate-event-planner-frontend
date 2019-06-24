import { SUCCESSFUL_LOGIN, SUCCESSFUL_SIGNIN } from '../store/actions/actionTypes';
import {set} from '../utils/localStorage';

export const setToken = store => next => action => {
    if(action.type === SUCCESSFUL_LOGIN || action.type === SUCCESSFUL_SIGNIN) {
        set('userToken', action.payload);
    }
    next(action);
}
