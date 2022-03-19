import React from 'react'
import style from './Friends.module.css'
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {
    let friends = props.props.map(e => {
        return <div key={e.id} className={style.friendsWrapper}>
            <div className={style.friendItem}>
                <NavLink to={'/dialogs/' + e.id}>
                    <img src={e.img} alt="" className={style.friendItem_img} />
                    <div className={style.friendItem_info}>{e.name}</div>
                </NavLink>
            </div>
        </div>
    })

    return (
        <div className={style.friends}>
            {friends}
        </div >
    )
}

export default Navbar
