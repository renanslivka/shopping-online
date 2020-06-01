import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { ShopPageContainer } from "./shop.styles";
import Spinner from "../../components/spinner/spinner";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const CollectionsOverviewContainer = lazy(() =>
  import("./../../components/collection-overview/collection-overview.container")
);

const CollectionPageContainer = lazy(() =>
  import("./../collection/collection.container")
);

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </ShopPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
