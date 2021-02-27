import React from "react";
import CollectionItem from "../collection-item/collection-item";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, match }) => (
  <CollectionPreviewContainer>
    <TitleContainer to={`shop/${title.toLowerCase()}`}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <CollectionItem
            key={item.id}
            item={item}
            collectionName={title}
            match={match}
          />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
export default CollectionPreview;
