import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'network/auth/SET-USER-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:

            return {
                ...state,
                ...action,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, userId: id, email: email, login: login, isAuth: isAuth })

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, response.data.data.isAuth = true))
            }
        });
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'someerrr'
                dispatch(stopSubmit('login', { _error: message }))
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}
export default authReducer;