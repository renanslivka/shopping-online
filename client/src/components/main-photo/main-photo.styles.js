import styled from "styled-components";

export const MainPhotoContainer = styled.div`
  height: ${({ size }) => (size ? "380px" : "600px")};
  min-width: 100%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

export const BackgroundPhotoContainer = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

export const ContentContainer = styled.div`
  height: 20%;

  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  @media screen and (max-width: 800px) {
    height: 100px;
  }
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 4em;
  color: #4a4a4a;
  @media screen and (max-width: 800px) {
    height: 200px;
    font-size: 1.5em;
    margin-top: 10px;
  }
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  color: white;
  width:208px;
  height:36px;
  background-color: #303132;
  justify-content: center;
  
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    border: solid 0.5px;
    background-color: #fff;
    color: #303132;
    border-color: black;
  }
    &.content {
      opacity: 0.9;
    }
  }
  @media screen and (max-width: 800px) {
    height: 50px;
    padding: 10px;
    margin: 0 10px 10px 10px;
    width: 100px;    
  }
`;
