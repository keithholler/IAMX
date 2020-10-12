import React from 'react';
import NavBar from './components/Navbar';
import SideOptions from './components/SideOptions';
import FindUser from './components/FindUser';
import CreateUser from './components/CreateUser';
import Home from './components/Home';
import './App.css';
import './App.scss';
import {BrowserRouter , Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <SideOptions/>
     <Switch>
     <Route path='/home' component={Home} />
     <Route exact path='/finduser' render={() => <FindUser/>} />
     <Route exact path='/createuser' render={() => <CreateUser/>} />
     <Redirect to='/home' />
     </Switch>
     
     
     </BrowserRouter>
     
    </div>
  );
}

export default App;
