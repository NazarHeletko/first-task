import { combineReducers } from 'redux';
import { QUERYING } from 'actions/translations';
import { GET_PERMISSION_GROUPS, GET_PERMISSION_USERS, UPDATE_USER_PERMISSION, GET_FPP_USERS } from '../actions/admins';

let initState = {
    querying: false,
    groups: [],
    users: [],
    admins: [],
};

const store = (state = initState, action) => {
    switch (action.type) {
        case QUERYING:
            return {
                ...state,
                querying: action.data
            }
        case GET_PERMISSION_GROUPS:
            return {
                ...state,
                groups: action.data.permissions
            }
        case GET_PERMISSION_USERS:
            return {
                ...state,
                admins: action.data.users
            }
        case UPDATE_USER_PERMISSION:
            var s = state;
            return {
                ...s,
            }
        case GET_FPP_USERS:
            return {
                ...state,
                users: action.data.users,
            }
        default:
            return state;
    }
};

const adminsReducer = combineReducers({
    store,
});

export default adminsReducer;