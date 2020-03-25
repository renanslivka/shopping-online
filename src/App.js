import React from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import signInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";

const HatsPage = () => {
  return <h1>HATS PAGE</h1>;
};
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={signInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
