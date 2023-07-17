import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ProductDetailReducer from "@contexts/reducers/client/ProductDetailReducer";
import {
  loadProductAction,
  setLoadingAction,
  loadRatingAction,
  loadRelatedProductAction,
  setRatingFormAction,
  setStatusAction,
  submitAction,
  toggleModalAction
} from "@contexts/actions/client/ProductDetailAction";
import { AppContext } from '@providers/AppProvider';

export const ProductDetailCotnext = createContext();

const initState = {
  product: {},
  ratings: {},
  related_products: [],
  rating_conditions: {
    page: 0,
    size: 10,
    sort: "createTime__desc",
  },
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  rating_form: {
    star: 5,
    content: "",
  },
  open_modal: false
};

const ProductDetailProvider = (props) => {
  const { appState } = useContext(AppContext);
  const [productDetailState, dispatch] = useReducer(
    ProductDetailReducer,
    initState
  );
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadProduct();
  }, [params.slug]);

  useEffect(() => {
    if (productDetailState.product.id > 0) {
      loadRating();
      loadRelatedProduct();
      setProductIdToRatingForm();
    }
  }, [productDetailState.product]);

  useEffect(() => {
    if(!productDetailState.status.isLoading && productDetailState.product.id == null) {
      navigate("/404");
    }
  }, [productDetailState.status.isLoading]);

  const loadProduct = async () => {
    setLoadingAction(true)(dispatch);
    await loadProductAction(params.slug)(dispatch);
  };

  const loadRelatedProduct = async () => {
    loadRelatedProductAction(
      productDetailState.product.categories.map((item) => item.id)
    )(dispatch);
  };

  const loadRating = async () => {
    await loadRatingAction(
      productDetailState.rating_conditions,
      productDetailState.product.id
    )(dispatch);
    setLoadingAction(false)(dispatch);
  };

  const setProductIdToRatingForm = () => {
    setRatingFormAction({
      field: "productId",
      value: productDetailState.product.id,
    })(dispatch);
  };

  const setRatingForm = (e) => {
    setRatingFormAction({
      field: e.target.name,
      value: e.target.value,
    })(dispatch);
  };

  const checkLoginBeforeRating = () => {
    if(appState.user.id == null) {
      toggleModal();
    }
  }

  const submit = async () => {
    if (validate()) {
      setLoadingAction(true);
      await submitAction(productDetailState.rating_form)(dispatch);
      setLoadingAction(false);
    }
  };

  const validate = () => {
    if (
      productDetailState.rating_form.content === null ||
      productDetailState.rating_form.content.length === 0
    ) {
      setStatusAction({
        isLoading: false,
        message: "Content not blank",
        success: false,
      })(dispatch);
      return false;
    }

    if (
      productDetailState.rating_form.star === "" ||
      productDetailState.rating_form.star === null
    ) {
      setStatusAction({
        isLoading: false,
        message: "Star not null",
        success: false,
      })(dispatch);
      return false;
    }

    return true;
  };

  const resetStatus = () => {
    setStatusAction({
      isLoading: false,
      message: "",
      success: true,
    })(dispatch);
  };

  const toggleModal = () => {
    toggleModalAction()(dispatch);
  }

  const value = {
    productDetailState,
    setRatingForm,
    submit,
    resetStatus,
    checkLoginBeforeRating,
    toggleModal
  };

  return (
    <ProductDetailCotnext.Provider value={value}>
      {props.children}
    </ProductDetailCotnext.Provider>
  );
};

export default ProductDetailProvider;
