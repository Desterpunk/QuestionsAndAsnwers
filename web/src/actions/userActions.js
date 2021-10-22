const URL_BASE = 'http://localhost:8080';
// const URL_BASE = ' https://nameless-escarpment-77078.herokuapp.com';

export const UPDATE_NAME = 'UPDATENAME'
export const UPDATE_LASTNAME = 'UPDATE_LASTNAME'

export const LOADING = 'LOADING'
export const LOADED_SUCCESS = 'LOADED_SUCCESS'
export const LOADED_FAILURE = 'LOADED_FAILURE'

export const success = payload => ({
    type: LOADED_SUCCESS,
    payload
});

export const failure = () => ({ type: LOADED_FAILURE })

export const loading = () => ({ type: LOADING })

export const updateName = (name,lastName) => ({ type: UPDATE_NAME, payload: {name,lastName} })

export function postUser(user) {
    return async dispatch => {
        dispatch(loading())
        try {
             await fetch(`${URL_BASE}/createuser`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }
            )
            dispatch(success({redirect: `/user`}));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function fetchUser(id) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/finduser/${id}`)
            const data = await response.json()
            dispatch(success({ user: data, redirect: null }))
        } catch (error) {
            dispatch(failure())
        }
    }
}