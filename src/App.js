/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import BrowsePage from "./pages/BrowsePage";
import { AuthProvider } from './lib/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SigninPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/browse" component={BrowsePage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
