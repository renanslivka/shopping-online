import React from "react";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { connect } from "react-redux";
import CartIcon from "./../cart-icon/cart-icon";
import CartDropdown from "./../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "./../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  Wrapper,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.action";
import { CSSTransition } from "react-transition-group";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <Wrapper>
      <CSSTransition in={hidden} timeout={300} classNames="slide" unmountOnExit>
        <CartDropdown />
      </CSSTransition>
    </Wrapper>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
