import React from 'react'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControl'
import { requiredField, maxLengthCreator } from '../utils/validators/validators'
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer"
import { Redirect } from 'react-router-dom'

const maxLength10 = maxLengthCreator(80)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} component={Input} validate={[requiredField, maxLength10]} />
            </div>
            <div>
                <Field type='password' name={"password"} component={Input} validate={[requiredField, maxLength10]} />
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

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxFrom onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);