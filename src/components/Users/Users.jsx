import React from "react";
import s from "./Users.module.css";
import ava from "../../assets/images/ava.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((p) => {
                    return (
                        <span
                            onClick={(e) => {
                                props.onPageChanged(p);
                            }}
                            className={props.currentPage === p && s.selectedPage}
                        >
                            {" "}
                            {p}
                        </span>
                    );
                })}
            </div>
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
                                    onClick={() => {
                                        axios
                                            .delete(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: { "API-KEY": "cdc4edf1-5517-43cc-807e-7c938a1d4b68" }
                                                }
                                            )
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id);
                                                }
                                            });
                                    }}
                                >
                                    unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        axios
                                            .post(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {},
                                                {
                                                    withCredentials: true,
                                                    headers: { "API-KEY": "cdc4edf1-5517-43cc-807e-7c938a1d4b68" }
                                                }
                                            )
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id);
                                                }
                                            });
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
