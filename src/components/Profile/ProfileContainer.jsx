import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getUserProfile, getStatus, updateStatus, savePhoto } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autherizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            let userId = this.props.match.params.userId;
            if (!userId) {
                userId = this.props.autherizedUserId;
            }
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }

    }


    render() {
        return <Profile {...this.props} savePhoto={this.props.savePhoto} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userId} />;
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autherizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});



export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto
    }),
    withAuthRedirect,
    withRouter
)(ProfileContainer);