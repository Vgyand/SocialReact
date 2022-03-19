import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => {
        return <DialogItem key={dialog.id} img={dialog.img} name={dialog.name} id={dialog.id} />
    })
    let messageElements = state.messages.map(message => {
        return <Message key={message.id} message={message.message} />
    })

    let newMessageText = state.newMessageText

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }
    let onSendMessageClick = () => {
        props.sendMessage()
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
            <textarea onChange={onNewMessageChange} value={newMessageText} name="" id="" cols="30" rows="10"></textarea>
            <div>
                <button onClick={onSendMessageClick}>puk</button>
            </div>
        </div>
    )
}

export default Dialogs