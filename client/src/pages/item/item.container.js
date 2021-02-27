import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "./../../components/with-spinner/with-spinner";
import { selectIsCollectionLoaded } from "./../../redux/shop/shop.selectors";
import ItemPage from "./item";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const ItemPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ItemPage);

export default ItemPageContainer;
