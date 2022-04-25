import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
import './Navbar.css'



const Navbar = (props) => {
    return (

        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/users'>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to=''>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to=''>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to=''>Setting</NavLink>
            </div>
            {/* <Friends props={props.state.dialogs} /> */}
        </nav>
    )
}

export default Navbar
