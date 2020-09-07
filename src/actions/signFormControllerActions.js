import { refreshingTokens, receiveUserData } from "./tokenManagement";
import { type } from "jquery";

export const REQUEST_SIGN_FORM = 'REQUEST_SIGN_FORM';
export const RESEIVE_SIGN_FORM = 'RESEIVE_SIGN_FORM';
export const USER_WAS_CREATED = 'USER_WAS_CREATED';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const LOG_OUT = 'LOG_OUT';
export const GUEST = 'GUEST';
export const WRONG_PASSWORD = 'WRONG_PASSWORD';
export function wrongPassword() {
    return {
        type: WRONG_PASSWORD
    }
}
export function isAGuest() {
    return {
        type: GUEST
    }
}
export function userWasCreated() {
    return {
        type: USER_WAS_CREATED
    }
}
export function userLoggedIn() {
    return {
        type: USER_LOGGED_IN
    }
}
export function requestSignForm() {
    return {
        type: REQUEST_SIGN_FORM
    }
}
export function reseiveSignForm(data) {
    return {
        type: RESEIVE_SIGN_FORM,
        data: data
    }
}
export function logOut() {
    return {
        type: LOG_OUT
    }
}
export function signIn(path) {
    return async function (dispatch) {
        dispatch(requestSignForm());
        const resp = await fetch(path,{method:'POST'});
        const json = await resp.json();
        if(json.body && json.body.access_token){
            dispatch(userLoggedIn());
            dispatch(refreshingTokens(json.body.access_token,json.body.refresh_token));
            dispatch(receiveUserData());
        }
        else if(json.status_code === 401 || json.status === 'error'){
            dispatch(wrongPassword());
        }
        dispatch(reseiveSignForm(json))
        return await json;
    }
}
export function signUp(path) {
    return async function (dispatch) {
        dispatch(requestSignForm());
        const resp = await fetch(path, {method: 'POST'});
        const json = await resp.json();
        if(json.status === 'Ok'){
            dispatch(userWasCreated());
        }
        else
        dispatch(reseiveSignForm(json))
        return await json;
    }
}