import React from "react";

import SignIn from "./../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import { SignInSignUpContainer } from "./sign-in-sign-up.styles";

const SignInSignUp = () => (
  <SignInSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpContainer>
);

export default SignInSignUp;
