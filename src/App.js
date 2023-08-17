import React from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Account } from "./pages/account/Account";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/account" component={Account} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;
