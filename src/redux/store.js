import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "halo", likesCount: 12 },
                { id: 2, message: "bebra", likesCount: 33 },
                { id: 3, message: "sheeesh", likesCount: 33 }
            ],
            newPostText: 'jija'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: "helo" },
                { id: 2, message: "bebra" },
                { id: 3, message: "sheeesh" }
            ],
            newMessageText: 'jijas',
            dialogs: [
                { id: 1, name: "goblin", img: "https://www.w3schools.com/howto/img_avatar.png" },
                { id: 2, name: "klim sanich", img: "https://www.w3schools.com/howto/img_avatar.png" },
                { id: 3, name: "dementiy", img: "https://www.w3schools.com/howto/img_avatar.png" },
                { id: 4, name: "svinka", img: "https://www.w3schools.com/howto/img_avatar.png" }
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("state changed")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


window.store = store

export default store