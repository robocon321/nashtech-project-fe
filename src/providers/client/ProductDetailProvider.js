import React, { createContext, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  initDataAction,
  setRatingFormAction,
  setStatusAction,
  submitAction,
  toggleModalAction
} from "@contexts/actions/client/ProductDetailAction";
import { AppContext } from '@providers/AppProvider';
import { useDispatch, useSelector } from "react-redux";

export const ProductDetailCotnext = createContext();

const ProductDetailProvider = (props) => {
  const { appState } = useContext(AppContext);
  const dispatch = useDispatch();
  const productDetailState = useSelector(state => state.productDetailReducer);
  const params = useParams();
  const navigate = useNavigate();
  console.log(productDetailState);

  useEffect(() => {
    initDataAction(params.slug)(dispatch);
  }, [params.slug]);

  useEffect(() => {
    if(!productDetailState.status.isLoading && productDetailState.product.id == null) {
      navigate("/404");
    }
  }, [productDetailState.status.isLoading]);

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
    setStatusAction({
      isLoading: true,
      message: "",
      success: false,    
    });
    if (validate()) {
      submitAction(productDetailState.rating_form)(dispatch);
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
