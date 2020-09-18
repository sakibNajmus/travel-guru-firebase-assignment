import React, { createContext, useState } from 'react';
import NoMatch from './components/NoMatch/NoMatch'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import Booking from './components/Booking/Booking';
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignUp from './components/SignUp/SignUp';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
            {/* <Home></Home> */}
          <Switch>
            <Route path="/home">
              <Banner></Banner>
            </Route>
            <Route path="/booking/:bookingId">
              <Booking></Booking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/destination">
              <Destination></Destination>
            </PrivateRoute>
            <Route exact path="/">
              <Banner></Banner>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
        </UserContext.Provider>
  );
}

export default App;
