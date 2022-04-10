import { getAuthUserData } from './auth-reducer'


const INIT_SUCCESS = 'SET-INIT'

let initialState = {
    init: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INIT_SUCCESS:
            return {
                ...state,
                init: true
            }
        default:
            return state
    }
}

export const initSuccess = () => ({ type: INIT_SUCCESS })

export const initApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initSuccess())
    })
}


export default appReducer;