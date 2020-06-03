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
    <MainPhotoContainer>
      <BackgroundPhotoContainer className="background-photo" src={photo} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle onClick={() => history.push(`${match.url}${linkUrl}`)}>
          SHOP NOW
        </ContentSubtitle>
      </ContentContainer>
    </MainPhotoContainer>
  );
};

export default withRouter(MainPhoto);
