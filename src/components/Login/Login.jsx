import React from 'react'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'

const LoginForm = (props) => {
    console.log('jij')
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} component={"input"} placeholder={'login'} />
            </div>
            <div>
                <Field name={"pass"} component={"input"} placeholder={'pass'} />
            </div>
            <div>
                <Field name={"rememberMe"} component={"input"} type={"checkbox"} placeholder={'login'} /> remember me
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