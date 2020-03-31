import React from "react";

import MenuItem from "../menu-item/menu-item";

import { connect } from "react-redux";
import { selectDirectorySections } from "./../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import { DirectoryMenuContainer } from "./directory.styles";

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
      <MenuItem
        key={id}
        title={title}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
