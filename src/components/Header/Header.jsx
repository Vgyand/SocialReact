import React from 'react'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {

  return (
    <header className={style.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
      <div className={style.loginBlock}>
        {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>logout</button></div> : <NavLink to={'/login'}>login</NavLink>}
      </div>
    </header>
  )
}

export default Header;