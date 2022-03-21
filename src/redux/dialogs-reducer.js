const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            {

                let stateCopy = {
                    ...state,
                }
                stateCopy.newMessageText = action.body;
                return stateCopy
            }
        case SEND_MESSAGE:
            {
                let stateCopy = {
                    ...state,
                    messages: [...state.messages]
                }
                let newMessage = {
                    id: 5,
                    message: state.newMessageText,
                    likesCount: 0,
                };
                stateCopy.messages.push(newMessage);
                stateCopy.newMessageText = '';
                return stateCopy
            }
        default: return state
    }

}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}
export const sendMessageCreator = () => {
    return ({
        type: SEND_MESSAGE
    })
}
export default dialogsReducer;