import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "./../../redux/shop/shop.selectors";
import WithSpinner from "./../../components/with-spinner/with-spinner";
import Item from "./item";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const ItemPageContainer = compose(connect(mapStateToProps), WithSpinner)(Item);

export default ItemPageContainer;
