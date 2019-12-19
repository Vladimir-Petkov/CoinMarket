import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/common/header/header';
import Table from './Components/table/table';
import Footer from './Components/common/footer/footer';
import Register from './Components/users/register/register';
import Login from './Components/users/login/login';
import Logout from './Components/users/logout/logout'
import Details from './Components/details/details';
import ContextWrapper from './ContextWrapper';
// import Profile from './Components/users/profile/profile';
import Terms from './Components/common/terms/terms';
import FavoriteCoins from './Components/favoriteCoins/favoriteCoins';
import Dashboard from './Components/dashboard/dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <ContextWrapper>
    <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Table} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/details/:id" component={Details} />
          <Route path="/terms" component={Terms} />
          <Route path="/favoriteCoins/:id" component={FavoriteCoins} />
          <Route path="/dashboard" component={Dashboard} />
          {/* <Route path="/profile" component={Profile} /> */}
        </Switch>
      <Footer />
    </Router>
    </ContextWrapper>
  )
}

export default App;
