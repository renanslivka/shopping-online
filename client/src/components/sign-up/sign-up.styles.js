import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  justify-content: center;
  margin: 180px auto;
  @media screen and (max-width: 800px) {
    margin: 110px auto;
    width: 80%;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
