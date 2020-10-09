import axios from 'axios';
import { getAuthorizationTokenFromLocalStorage } from 'libs/local-storage';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { refreshAuthLogic } from './auth';

createAuthRefreshInterceptor(axios, refreshAuthLogic, {
    statusCodes: [ 401, 403 ] // default: [ 401 ]
});

export const QUERYING = 'QUERYING';
const setQuerying = (dispatch) => (enable) => {
    dispatch({
        type: QUERYING,
        data: enable,
    });
}

const apiCall = (dispatch) => (path, method, data, customOptions = {}) => {
    return new Promise((resolve, reject) => {
        var accessToken = getAuthorizationTokenFromLocalStorage();
        setQuerying(dispatch)(true);
        axios({
            method: method,
            url: path,
            data: data,
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            ...customOptions,
        })
        .then((response) => {
            setQuerying(dispatch)(false);
            resolve(response.data)
        })
        .catch((error) => {
            setQuerying(dispatch)(false);
            console.log("error", error)
            if (error.response) {
                reject(error.response.data);
                return;
            }
            reject(error);
        });
    });
};

export const GET_PERMISSION_GROUPS = 'GET_PERMISSION_GROUPS';
export const getPermissionsGroupsResponse = (data) => ({
    type: GET_PERMISSION_GROUPS,
    data
});

export const getPermissions = (params = {}) => (dispatch) => {
    return new Promise((resolve, reject) => {
        apiCall(dispatch)(window.ACCOUNTS_API_URL + `permissions/groups/`, "GET")
        .then((data) => {
            dispatch(getPermissionsGroupsResponse(data));
            resolve(data);
        })
        .catch((data) => {
            dispatch(getPermissionsGroupsResponse(data));
            resolve(data);
        });
    });
};

export const GET_PERMISSION_USERS = 'GET_PERMISSION_USERS';
export const getPermissionsUsersResponse = (data) => ({
    type: GET_PERMISSION_USERS,
    data
});

export const getPermissionUsers = (params = {}) => (dispatch) => {
    return new Promise((resolve, reject) => {
        apiCall(dispatch)(window.ACCOUNTS_API_URL + `permissions/users/`, "GET")
        .then((data) => {
            dispatch(getPermissionsUsersResponse(data));
            resolve(data);
        })
        .catch((data) => {
            dispatch(getPermissionsUsersResponse(data));
            resolve(data);
        });
    });
};

export const UPDATE_USER_PERMISSION = 'UPDATE_USER_PERMISSION';
export const updateUserPermissionsResponse = (data) => ({
    type: UPDATE_USER_PERMISSION,
    data
});

export const updateUserPermissions = (params = {}) => (dispatch) => {
    return new Promise((resolve, reject) => {
        apiCall(dispatch)(window.ACCOUNTS_API_URL + `permissions/users/`, "POST", params)
        .then((data) => {
            dispatch(updateUserPermissionsResponse({ ...data, user_id: params.user_id }));
            resolve(data);
        })
        .catch((data) => {
            dispatch(updateUserPermissionsResponse({ ...data, user_id: params.user_id }));
            resolve(data);
        });
    });
};

export const GET_FPP_USERS = 'GET_FPP_USERS';
export const getFPPUsersResponse = (data) => ({
    type: GET_FPP_USERS,
    data
});

export const getFPPUsers = (params = {}) => (dispatch) => {
    return new Promise((resolve, reject) => {
        apiCall(dispatch)(window.ACCOUNTS_API_URL + `search/users`, "GET")
        .then((data) => {
            dispatch(getFPPUsersResponse(data));
            resolve(data);
        })
        .catch((data) => {
            dispatch(getFPPUsersResponse(data));
            resolve(data);
        });
    });
};