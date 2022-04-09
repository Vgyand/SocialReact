import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControl'
import { requiredField, maxLengthCreator } from '../utils/validators/validators'

const maxLength10 = maxLengthCreator(10)


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[requiredField, maxLength10]} name="newMessageText" />
            <div>
                <button>puk</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => {
        return <DialogItem key={dialog.id} img={dialog.img} name={dialog.name} id={dialog.id} />
    })
    let messageElements = state.messages.map(message => {
        return <Message key={message.id} message={message.message} />
    })

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }

    if (props.isAuth === false) return <Redirect to={'/login'} />

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>

            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs