import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import UsersContainer from './components/Users/UsersContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";


function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
