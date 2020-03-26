import React, { Component } from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import signInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/* currentUser is null or it is Object! */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={signInSignUp} />
        </Switch>
      </div>
    );
  }
}
export default App;
