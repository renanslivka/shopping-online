import React from "react";
import { connect } from "react-redux";

export const Item = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h2>Item Page</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
