import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import UsersContainer from './components/Users/UsersContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import './App.css';
import {
  Route,

  BrowserRouter
} from "react-router-dom";


function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
