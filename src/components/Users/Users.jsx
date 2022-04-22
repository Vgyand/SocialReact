import React from "react";
import s from "./Users.module.css";
import ava from "../../assets/images/ava.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


let Users = (props) => {

    return (
        <div>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} portionSize={10} />
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img
                                    className={s.AvaImg}
                                    src={u.photos.small != null ? u.photos.small : ava}
                                    alt={"keks"}
                                />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    disabled={props.followingInProgress.some(id => id == u.id)}
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}
                                >
                                    unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={props.followingInProgress.some(id => id == u.id)}
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}
                                >
                                    follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
