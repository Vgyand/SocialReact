import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getUserProfile } from '../../redux/profile-reducer'
import { Redirect } from 'react-router'


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 22875;
        }
        this.props.getUserProfile(userId)
    }

    render() {

        if (this.props.isAuth === false) return <Redirect to={"/login"} />
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


let u = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getUserProfile
})(u)