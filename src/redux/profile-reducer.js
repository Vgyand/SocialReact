import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
    posts: [
        { id: 1, message: "halo", likesCount: 12 },
        { id: 2, message: "bebra", likesCount: 33 },
        { id: 3, message: "sheeesh", likesCount: 33 }
    ],
    newPostText: 'jija',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0,
                };

                let stateCopy = { ...state };
                stateCopy.posts = [...state.posts];
                stateCopy.posts.push(newPost)
                stateCopy.newPostText = '';
                return stateCopy
            }
        case UPDATE_NEW_POST_TEXT:
            {
                let stateCopy = { ...state };
                stateCopy.newPostText = action.newText;
                return stateCopy
            }
        case SET_USER_PROFILE:
            {
                return { ...state, profile: action.profile }
            }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default: return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response.data))
        });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then((response) => {
            dispatch(setStatus(response.data))
        });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then((response) => {
            if (response.data.resultCOde === 0) {
                dispatch(setStatus(status))
            }

        });
}

export default profileReducer;