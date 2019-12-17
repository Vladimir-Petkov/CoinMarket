import React from "react";
import './styles.css';

function HeaderPage() {
  const user = sessionStorage.getItem('username');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="https://coinmarket.zone/wp-content/uploads/2018/05/logo2-e1526378033702.png" alt=""></img><font size="5" color="#87CEFA">CoinMarket</font>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              {user && <a className="nav-link" href="/dashboard">Dashboard</a>}
            </li>
            <li className="nav-item active">
              {!user && <a className="nav-link" href="/login">Login</a>}
            </li>
            <li className="nav-item">
              {!user && <a className="nav-link" href="/register">Register</a>}
            </li>
            <li className="nav-item">
              {user && <a className="nav-link" href="/logout">Logout</a>}
            </li>
            <li className="nav-item">
              {user && <a className="nav-link" href="/profile"> Welcome: {user}</a>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderPage;