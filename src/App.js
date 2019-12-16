import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/common/header/header';
import Table from './Components/table/table';
import Footer from './Components/common/footer/footer';
import Register from './Components/users/register/register';
import Login from './Components/users/login/login';
// import details from './Components/details/details';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Table} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          {/* <Route path="/details" component={details} /> */}
        </Switch>
        <Footer/>
      </Router>
  )
}

export default App;
