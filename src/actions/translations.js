import axios from 'axios';
import { getAuthorizationTokenFromLocalStorage } from 'libs/local-storage';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { refreshAuthLogic } from './auth';

createAuthRefreshInterceptor(axios, refreshAuthLogic, {
    statusCodes: [ 401, 403 ] // default: [ 401 ]
});

export const MERGE_LANGUAGE_CHANGES = 'MERGE_LANGUAGE_CHANGES';
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
            // call refresh token here if needed
            reject(error.response.data);
        });
    });
};

export const LANGUGES_RESPONSE = 'LANGUGES_RESPONSE';
export const languagesResponse = (data) => ({
    type: LANGUGES_RESPONSE,
    data,
});

export const getLanguages = (params = {}) => (dispatch) => {
    return new Promise((resolve, reject) => {
        apiCall(dispatch)(window.LANGUAGES_API_URL + ``, "GET", undefined, { params })
        .then((data) => {
            dispatch(languagesResponse(data));
            resolve(data);
        })
        .catch((data) => {
            dispatch(languagesResponse(data));
            resolve(data);
        });
    });
};

export const SINGLE_LANGUGE_RESPONSE = 'SINGLE_LANGUGE_RESPONSE';
export const singleLanguageResponse = (data) => ({
    type: SINGLE_LANGUGE_RESPONSE,
    data
});

export const getLanguage = (params = {}) => (dispatch) => {
    return new Promise((resolve, reject) => {
        apiCall(dispatch)(window.LANGUAGES_API_URL + `${params.id}?dev=true`, "GET")
        .then((data) => {
            dispatch(singleLanguageResponse({...data, id: params.id}));
            resolve({...data, id: params.id});
        })
        .catch((data) => {
            dispatch(singleLanguageResponse({...data, id: params.id}));
            resolve({...data, id: params.id});
        });
    });
};

export const PATCH_LANGUGE_RESPONSE = 'PATCH_LANGUGE_RESPONSE';
export const patchLanguageResponse = (data) => ({
    type: PATCH_LANGUGE_RESPONSE,
    data
});

export const patchLanguage = (params = {}) => (dispatch) => {
    return new Promise((resolve, reject) => {
        apiCall(dispatch)(window.LANGUAGES_API_URL + `${params.id}`, "PATCH", params.changes)
        .then((data) => {
            dispatch(patchLanguageResponse(data));
            resolve(data);
        })
        .catch((data) => {
            alert("Failed to update the language. Please contact the support.")
            dispatch(patchLanguageResponse(data));
            resolve(data);
        });
    });
};

export const CREATE_LANGUAGE_RESPONSE = 'CREATE_LANGUAGE_RESPONSE';
export const createLanguageResponse = (data) => ({
    type: CREATE_LANGUAGE_RESPONSE,
    data
});

export const createLanguage = (params = {}) => (dispatch) => {
    return new Promise((resolve, reject) => {
        apiCall(dispatch)(window.LANGUAGES_API_URL + `?tag=${params.tag}&display_name=${params.display_name}`, "POST", { ...params.translations })
        .then((data) => {
            dispatch(createLanguageResponse(data));
            resolve(data);
        })
        .catch((data) => {
            dispatch(createLanguageResponse(data));
            resolve(data);
        });
    });
};