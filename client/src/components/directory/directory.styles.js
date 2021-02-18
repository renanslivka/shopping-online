import styled from "styled-components";

export const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 20px 0px 20px;
  @media screen and (max-width: 800px) {
    padding: 0px;
  }
`;

export const FooterMainPhotoContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
`;

export const FooterMainPhoto = styled.div`
  color: #303132;
  font-size: 18px;
  font-family: sans-serif;
  opacity: 0.7;
`;
