export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';
export const ACCESS_TOKEN_WAS_NOT_VALID = 'ACCESS_TOKEN_WAS_NOT_VALID';
export const REFRESH_TOKEN_WAS_NOT_VALID = 'REFRESH_TOKEN_WAS_NOT_VALID';
export const REFRESHING_TOKENS = 'REFRESHING_TOKENS';

export function requestToken() {
    return {
        type: REQUEST_TOKEN
    }
}
export function receiveUserData(userData) {
    return {
        type: RECEIVE_USER_DATA,
        userData: userData
    }
}
export function accessTokenWasNotValid() {
    return {
        type: ACCESS_TOKEN_WAS_NOT_VALID
    }
}
export function refreshTokenWasNotValid() {
    return {
        type: REFRESH_TOKEN_WAS_NOT_VALID
    }
}
export function refreshingTokens(accessToken,refreshToken) {
    return{
        type: REFRESHING_TOKENS,
        accessToken,
        refreshToken
    }
}
export function refreshTokensAction(path, refreshToken) {
    return async (dispatch) => {
        const json = await refreshTokens(path, refreshToken);
        if (json.statusCode === 401) {
            dispatch(refreshTokenWasNotValid());
        }
        return json;
    }
}
async function refreshTokens(path, refreshToken) {
    const resp = await fetch(
        path,
        {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + refreshToken
            }
        }
    );
    const json = await resp.json();
    return await json;
}
export function logInWithToken(path, token, refreshPath, refreshToken) {
    return async function (dispatch) {
        dispatch(requestToken());
        async function tryLog() {
            const resp = await fetch(
                path,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                }
            );
            return await resp.json();
        }
        const json = await tryLog();
        console.log(json);
        if (json.statusCode === 401 && refreshToken && refreshPath) {
            dispatch(accessTokenWasNotValid());
            const refreshJson = await refreshTokens(refreshPath, refreshToken);
            if (refreshJson.statusCode === 401) {
                console.log(refreshJson);
                dispatch(refreshTokenWasNotValid());
            }
        } else
            dispatch(receiveUserData(json))
        return await json;
    }
}