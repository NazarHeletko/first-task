export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
};

export const setNewTokens = (tokens) => {
    console.log("tokens", tokens)
    localStorage.setItem('accessToken', tokens.auth.token);
    localStorage.setItem('refreshToken', tokens.refresh.token);
}

export const getAuthorizationTokenFromLocalStorage = () => {
    return localStorage.getItem("accessToken");
}

export const getRefreshTokenFromLocalStorage = () => {
    return localStorage.getItem("refreshToken");
}
