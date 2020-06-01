import React from "react";
import {
  MainPhotoContainer,
  BackgroundPhotoContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./main-photo.styles";
import photo from "./../../assests/main-photo.png";
import { withRouter } from "react-router-dom";

const title = "SHOPPING ONLINE";
const linkUrl = "shop";

const MainPhoto = ({ history, match }) => {
  return (
    <MainPhotoContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundPhotoContainer className="background-photo" src={photo} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MainPhotoContainer>
  );
};

export default withRouter(MainPhoto);
