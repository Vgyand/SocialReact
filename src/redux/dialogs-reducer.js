const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        { id: 1, message: "helo" },
        { id: 2, message: "bebra" },
        { id: 3, message: "sheeesh" }
    ],
    dialogs: [
        { id: 1, name: "goblin", img: "https://www.w3schools.com/howto/img_avatar.png" },
        { id: 2, name: "klim sanich", img: "https://www.w3schools.com/howto/img_avatar.png" },
        { id: 3, name: "dementiy", img: "https://www.w3schools.com/howto/img_avatar.png" },
        { id: 4, name: "svinka", img: "https://www.w3schools.com/howto/img_avatar.png" }
    ]
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            }
        default: return state
    }

}


export const sendMessageCreator = (newMessageText) => {
    return ({
        type: SEND_MESSAGE,
        newMessageText
    })
}
export default dialogsReducer;