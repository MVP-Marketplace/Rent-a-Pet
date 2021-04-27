import React from "react";
import './App.css';

import {BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import StripeTest from "./components/StripeTest";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./components/PrivateRoute";


const  App = () => {
  return (
    <AuthProvider>
    <Router>
      <div>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/stripe-test" component={StripeTest} />
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;
