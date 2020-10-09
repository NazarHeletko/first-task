import {combineReducers} from 'redux';
import authReducer from './auth';
import appUserReducer from './appUser';
import translationsReducer from './translations';
import adminsReducer from './admins';

const rootReducer = combineReducers({
    authReducer,
    appUserReducer,
    translationsReducer,
    adminsReducer,
});

export default rootReducer;