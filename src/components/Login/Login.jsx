import React from 'react'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControl'
import { requiredField, maxLengthCreator } from '../utils/validators/validators'

const maxLength10 = maxLengthCreator(10)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} component={Input} validate={[requiredField, maxLength10]} />
            </div>
            <div>
                <Field name={"pass"} component={Input} validate={[requiredField, maxLength10]} />
            </div>
            <div>
                <Field name={"rememberMe"} component={Input} type={"checkbox"} placeholder={'login'} /> remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}
const LoginReduxFrom = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxFrom onSubmit={onSubmit} />
        </div>
    )
}

export default Login