export const REQUEST_SIGN_FORM = 'REQUEST_SIGN_FORM';
export const RESEIVE_SIGN_FORM = 'RESEIVE_SIGN_FORM';
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
export function signIn(path) {
    return async function (dispatch) {
        dispatch(requestSignForm());
        const resp = await fetch(path,{method:'POST'});
        console.log(resp);
        const json = await resp.json();
        console.log(json);
        dispatch(reseiveSignForm(json))
        return await json;
    }
}
export function signUp(path, body) {
    return async function (dispatch) {
        dispatch(requestSignForm());
        console.log(body);
        const resp = await fetch(
            path,
            {
                method: 'POST',
                headers: {
                    ...body
                },
               
            }
        );
        console.log(resp);
        const json = await resp.json();
        console.log(json);
        dispatch(reseiveSignForm(json))
        return await json;
        /* return new Promise(resolve=>true); */
    }
}