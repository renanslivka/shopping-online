import styled from "styled-components";

export const MainPhotoContainer = styled.div`
  height: ${({ size }) => (size ? "380px" : "600px")};
  min-width: 100%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
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
`;

export const ContentContainer = styled.div`
  height: 20%;
  width: 40%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 2em;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  &:hover {
    cursor: pointer;

    & .content {
      opacity: 0.9;
    }
  }
`;
