import { createStructuredSelector } from "reselect";
import CollectionsOverview from "./collection-overview";
import { connect } from "react-redux";
import WithSpinner from "./../with-spinner/with-spinner";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
