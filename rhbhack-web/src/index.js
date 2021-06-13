import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './components/Admin/Admin';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Router, Route } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/NavbarPage/NavbarPage';

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/admin" component={Admin}/>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
