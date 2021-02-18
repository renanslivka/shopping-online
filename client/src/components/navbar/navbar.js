import React from "react";

import { Nav, LogoContainer } from "./navbar.styles";
import BurgerMenu from "../burger-menu/burger-menu";

import { ReactComponent as Logo } from "../../assests/crown.svg";

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <BurgerMenu />
    </Nav>
  );
};

export default Navbar;
