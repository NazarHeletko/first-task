import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { removeUserFromLocalStorage, getAuthorizationTokenFromLocalStorage, setNewTokens } from "../libs/local-storage";

export const refreshAuthLogic = failedRequest => axios({
    method: "POST",
    url: window.ACCOUNTS_API_URL + `auth2/refresh`,
    data: { refresh_token: localStorage.getItem("refreshToken") },
    headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    },
    skipAuthRefresh: true
}).then(tokenRefreshResponse => {
    console.log("refreshed tokens...")
    setNewTokens(tokenRefreshResponse.data.tokens)
    failedRequest.response.config.headers['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`;
    if (window.location.pathname.split('/')[1] === "auth") {
        window.location = "/admin"
    }
    return Promise.resolve();
});

createAuthRefreshInterceptor(axios, refreshAuthLogic, {
    statusCodes: [ 401, 403 ] // default: [ 401 ]
});

export const CREATED_DEVICE = 'CREATED_DEVICE';
export const RECEIVE_AUTH_DATA = 'RECEIVE_AUTH_DATA';
export const REDO_VERIFICATION = 'REDO_VERIFICATION';

export const QUERYING = 'QUERYING';
const setQuerying = (dispatch) => (enable) => {
    dispatch({
        type: QUERYING,
        data: enable,
    });
}

function createRandomBytes(nBytes) {
    return "xx".repeat(nBytes).replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
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
        .catch(async (error) => {
            setQuerying(dispatch)(false);
            reject(error.response.data);
        });
    });
};

export const fetchAuthUser = (params = {}) => (dispatch) => {
    return new Promise((resolve, reject) => {
        apiCall(dispatch)(window.ACCOUNTS_API_URL + `auth2/me`, "GET", undefined, { params })
        .then((data) => {
            dispatch({
                type: RECEIVE_AUTH_DATA,
                data: data,
            });
            resolve(data);
        })
        .catch((data) => {
            console.log("redirecting to login...");
            window.location = '/auth/login';
            dispatch({
                type: RECEIVE_AUTH_DATA,
                data: data,
            });
            resolve(data);
        });
    });
};


export const CHANGE_LOGIN = 'CHANGE_LOGIN';
export const changeLogin = (data) => ({
    type: CHANGE_LOGIN,
    data,
});

export const USER_CREATION = 'USER_CREATION';
export const userCreationVerifiationResponse = (data) => ({
    type: USER_CREATION,
    data,
});

export const START_VERIFICATION = 'START_VERIFICATION';
export const START_VERIFICATION_RESPONSE = 'START_VERIFICATION_RESPONSE';
export const startVerifiationResponse = (data) => ({
    type: START_VERIFICATION_RESPONSE,
    data,
});

export const CONFIRM_VERIFICATION = 'CONFIRM_VERIFICATION';
export const CONFIRM_VERIFICATION_RESPONSE = 'CONFIRM_VERIFICATION_RESPONSE';
export const confirmVerificationResponse = (data) => ({
    type: CONFIRM_VERIFICATION_RESPONSE,
    data,
});

export const CONFIRM_PASSCODE = 'CONFIRM_PASSCODE';
export const CONFIRM_PASSCODE_RESPONSE = 'CONFIRM_PASSCODE_RESPONSE';
export const confirmPasscodeResponse = (data) => ({
    type: CONFIRM_PASSCODE_RESPONSE,
    data,
});

export const TOKEN_REFRESH_RESPONSE = 'TOKEN_REFRESH_RESPONSE';
export const tokenRefreshResponse = (data) => ({
    type: TOKEN_REFRESH_RESPONSE,
    data,
});

const getDeviceName = () => {
    const ua = navigator.userAgent;
    let name = ua.match(/\((.*)\)(.*)\((.*)\)/);
    name = name ? name : ua.match(/\((.*)\)/);
    return name && name.length ?`Admin Panel (${name[1]})` : `Admin Panel`;
}

export const createNewUser = () => (dispatch) => {
    var params = {
        device_id: createRandomBytes(20),
        device_name: getDeviceName(),
        firebase_token: "",
    }

    dispatch({
        type: CREATED_DEVICE,
        data: params.device_id,
    })
    return new Promise((resolve, reject) => {
        apiCall(dispatch)(window.ACCOUNTS_API_URL + `auth2/create-user`, "POST", params)
        .then((data) => {
            dispatch(userCreationVerifiationResponse(data));
            resolve(data);
        })
        .catch((data) => {
            dispatch(userCreationVerifiationResponse(data));
            resolve(data);
        });
    });
}

export const startVerification = (params = {}) => (dispatch) => {
    return new Promise((resolve, reject) => {
        apiCall(dispatch)(window.ACCOUNTS_API_URL + `auth2/sms-login/start`, "POST", params)
        .then((data) => {
            dispatch(startVerifiationResponse(data));
            resolve(data);
        })
        .catch((data) => {
            console.log("data", data)
            dispatch(startVerifiationResponse(data));
            resolve(data);
        });
    });
}

export const confirmVerification = (params = {}) => (dispatch) => {
    return new Promise(async (resolve, reject) => {
        await createNewUser()(dispatch);
        apiCall(dispatch)(window.ACCOUNTS_API_URL + `auth2/sms-login/confirm`, "POST", {
            device_id: localStorage.getItem("device_id"),
            firebase_token: "",
            ...params,
        })
        .then((data) => {
            console.log(data)
            if (data.success) {
                setNewTokens(data.tokens);
                window.tokens = data.tokens;
            }
            dispatch(confirmVerificationResponse(data));
            resolve(data);
        })
        .catch((data) => {
            dispatch(confirmVerificationResponse(data));
            resolve(data);
        });
    });
}

export const confirmPasscode = (params = {}) => (dispatch) => {
    return new Promise(async (resolve, reject) => {
        await createNewUser()(dispatch);
        apiCall(dispatch)(window.ACCOUNTS_API_URL + `passcode2/validate?pass_code=${params.passcode}`, "GET")
        .then((data) => {
            console.log(data)
            if (data.success) {
                console.log("settings new tokens");
                setNewTokens(window.tokens);
            }
            dispatch(confirmPasscodeResponse(data));
            window.location = '/admin';
            resolve(data);
        })
        .catch((data) => {
            removeUserFromLocalStorage();
            dispatch(confirmPasscodeResponse(data));
            resolve(data);
        });
    });
}

export const refreshToken = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        var refreshToken = localStorage.getItem("refreshToken");
        apiCall(dispatch)(window.ACCOUNTS_API_URL + `auth2/refresh`, "POST", { refresh_token: refreshToken })
        .then((data) => {
            if (data.success) {
                setNewTokens(data.tokens);
            }
            dispatch(confirmVerificationResponse(data));
            resolve(data);
        })
        .catch((data) => {
            dispatch(confirmVerificationResponse(data));
            resolve(data);
        });
    });
}

export const LOGOUT_RESPONSE = 'LOGOUT_RESPONSE';
const logoutResponse = (data) => ({
    type: LOGOUT_RESPONSE,
    data,
});

export const logout = (params = {}) => (dispatch) => {
    return axios
        .post(window.API_URL + `logout`, params)
        .then((response) => {
            if (response.data) {
                removeUserFromLocalStorage();
                dispatch(logoutResponse(response.data));
                window.location = '/';
            }
        })
        .catch((error) => {
            dispatch(logoutResponse(error.response.data));
        });
};