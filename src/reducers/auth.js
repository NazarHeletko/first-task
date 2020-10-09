import { combineReducers } from 'redux';
import {
    QUERYING,
    CHANGE_LOGIN,
    CREATED_DEVICE,
    LOGOUT_RESPONSE,
    RECEIVE_AUTH_DATA,
    START_VERIFICATION,
    START_VERIFICATION_RESPONSE,
    CONFIRM_VERIFICATION,
    CONFIRM_VERIFICATION_RESPONSE,
    REDO_VERIFICATION,
    USER_CREATION,
    TOKEN_REFRESH_RESPONSE,
    CONFIRM_PASSCODE,
    CONFIRM_PASSCODE_RESPONSE
} from '../actions/auth';
import { setNewTokens } from 'libs/local-storage';
import { removeUserFromLocalStorage } from '../libs/local-storage';

let user = JSON.parse(
    localStorage.getItem('user')
);
let accessToken = localStorage.getItem('accessToken');
let refreshToken = localStorage.getItem('refreshToken');

let initState = {
    authenticated: user && accessToken && refreshToken ? true : false,
    querying: false,
    login: {},
    verification_started: false,
    confirm_started: false,
    passcode_started: false,
    user: user || {},
    errors: {},
    message: "",
};

const store = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {
                ...state,
                login: Object.assign({}, state.login, action.data),
            };
        case QUERYING:
            return {
                ...state,
                querying: action.data
            }
        case USER_CREATION:
            return {
                ...state,
            }
        case TOKEN_REFRESH_RESPONSE:
            setNewTokens(action.data.tokens)
            return {
                ...state,
            }
        case START_VERIFICATION:
            return {
                ...state,
                errors: {},
                message: "",
                verification_started: true
            }
        case START_VERIFICATION_RESPONSE:
            if (action.data.success) {
                return {
                    ...state,
                    message: "",
                    verification_started: true,
                };
            } else {
                return {
                    ...state,
                    verification_started: false,
                    errors: action.data.errors,
                    message: "This number does not have permissions to proceed",
                };
            }
        case REDO_VERIFICATION:
            return {
                ...state,
                verification_started: false,
                confirm_started: false,
                message: "",
            }
        case CONFIRM_VERIFICATION:
            return {
                ...state,
                confirm_started: true
            }
        case CONFIRM_VERIFICATION_RESPONSE:
            if (action.data.success) {
                return {
                    ...state,
                    confirm_started: true
                };
            } else {
                return {
                    ...state,
                    confirm_started: false,
                    errors: action.data.errors,
                    message: action.data.message,
                };
            }
        case CONFIRM_PASSCODE:
            return {
                ...state,
                passcode_started: true
            }
        case CONFIRM_PASSCODE_RESPONSE:
            if (action.data.success) {
                return {
                    ...state,
                    passcode_started: false
                };
            } else {
                return {
                    ...state,
                    passcode_started: false,
                    errors: action.data.errors,
                    message: action.data.message,
                };
            }
        case LOGOUT_RESPONSE:
            if (action.data.success) {
                return {
                    ...state,
                    authenticated: false,
                    user: {},
                };
            } else {
                return {
                    ...state,
                    errors: action.data.errors,
                    message: action.data.message,
                };
            }
        case CREATED_DEVICE:
            localStorage.setItem('device_id', action.data);
            return {
                ...state,
                device_id: action.data,
            };
        case RECEIVE_AUTH_DATA:
            console.log("data", action.data)
            if (action.data.success) {
                if (!action.data.membership.has_membership || action.data.membership.permissionGroup.default_membership) {
                    alert("This user does not have permissions to enter this portal.");
                    removeUserFromLocalStorage();
                    return window.location = "/auth/login";
                }
            }
            localStorage.setItem('user', JSON.stringify(action.data));
            return {
                ...state,
                user: action.data,
            };
        default:
            return state;
    }
};

const authReducer = combineReducers({
    store,
});

export default authReducer;