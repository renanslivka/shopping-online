import React from "react";
import CartIcon from "../cart-icon/cart-icon";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  RightNavContainer,
  Ul,
  OptionsContainer,
  OptionLink,
  HomePageLink,
} from "./mobile-menu-drawer.styles";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user.action";

const MobileMenuDrawer = ({ open, setOpen, currentUser, signOutStart }) => {
  let location = useLocation();

  const handleClickOnLink = (link) => {
    if (location.pathname !== link) {
      setOpen(!open);
    }
  };

  return (
    <RightNavContainer>
      <Ul open={open}>
        <OptionsContainer>
          <HomePageLink onClick={() => handleClickOnLink("/")} to="/">
            HOME
          </HomePageLink>
          <OptionLink onClick={() => handleClickOnLink("/shop")} to="/shop">
            SHOP
          </OptionLink>
          <OptionLink
            onClick={() => handleClickOnLink("/contact")}
            to="/contact"
          >
            CONTACT
          </OptionLink>
          {currentUser ? (
            <OptionLink as="div" onClick={signOutStart}>
              SIGN OUT
            </OptionLink>
          ) : (
            <OptionLink
              onClick={() => handleClickOnLink("/signin")}
              to="/signin"
            >
              SIGN IN
            </OptionLink>
          )}
        </OptionsContainer>
      </Ul>
      <CartIcon />
    </RightNavContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuDrawer);
