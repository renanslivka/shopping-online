import React, { useEffect, useState } from "react";

import MobileMenuDrawer from "../mobile-menu-drawer/mobile-menu-drawer";
import { StyledBurger } from "./burger-menu.styles";
import { connect } from "react-redux";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import CartDrawer from "./../cart-drawer/cart-drawer";

const BurgerMenu = ({ hidden }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open && (document.body.style.overflow = "hidden");
    !open && (document.body.style.overflow = "unset");
  }, [open]);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MobileMenuDrawer open={open} setOpen={() => setOpen(!open)} />
      <CartDrawer hidden={hidden} />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(BurgerMenu);
