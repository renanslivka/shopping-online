import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";

import Header from "./components/header/header";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import CheckoutPage from "./pages/checkout/checkout";
import { GlobalStyle } from "./global.styles";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      {/* currentUser is null or it is Object! */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
