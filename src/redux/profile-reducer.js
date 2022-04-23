import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'

let initialState = {
    posts: [
        { id: 1, message: "halo", likesCount: 12 },
        { id: 2, message: "bebra", likesCount: 33 },
        { id: 3, message: "sheeesh", likesCount: 33 }
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                let newPost = {
                    id: 5,
                    message: action.newPostText,
                    likesCount: 0,
                };

                let stateCopy = { ...state };
                stateCopy.posts = [...state.posts];
                stateCopy.posts.push(newPost)
                stateCopy.newPostText = '';
                return stateCopy
            }

        case SET_USER_PROFILE:
            {
                return { ...state, profile: action.profile }
            }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }
        default: return state
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
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

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
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
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer;