import React from "react";
import { connect } from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader.jsx";
import { getUsers } from "../../api/api";

class UsersApiComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUser(response.items);
            this.props.setTotalUsersCount(response.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        getUsers(pageNumber, this.props.pageSize)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUser(response.items);
            });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};
export default connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setUser: setUsers,
    setCurrentPage: setCurrentPage,
    setTotalUsersCount: setUsersTotalCount,
    toggleIsFetching: toggleIsFetching,
})(UsersApiComponent);
