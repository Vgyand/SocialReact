import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import UsersContainer from './components/Users/UsersContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Login from './components/Login/Login'
import './App.css';
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import React from 'react'
import { connect } from 'react-redux'
import { initApp } from './redux/app-reducer'
import { compose } from 'redux'
import Preloader from './components/common/Preloader/Preloader'



class App extends React.Component {
  componentDidMount() {
    this.props.initApp();
  }


  render() {
    if (!this.props.init) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter >
    );
  }

}

const mapStateToProps = (state) => {
  return {
    init: state.app.init
  }
}
export default compose(
  connect(mapStateToProps, { initApp }))(App);
