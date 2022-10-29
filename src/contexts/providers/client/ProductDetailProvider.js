import React, { createContext, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';


import ProductDetailReducer from '../../reducers/client/ProductDetailReducer';
import { loadProductAction, setLoadingAction, loadRatingAction, loadRelatedProductAction } from '../../actions/client/ProductDetailAction';

export const ProductDetailCotnext = createContext();

const initState = {
  product: {},
  ratings: {},
  related_products: [],
  rating_conditions: {
    page: 0,
    size: 10,
    sort: 'createTime__desc'
  },
  status: {
    isLoading: false,
    message: '',
    success: true
  }
}

const ProductDetailProvider = (props) => {
  const [ productDetailState, dispatch ] = useReducer(ProductDetailReducer, initState);
  const params = useParams();

  useEffect(() => {
    console.log(productDetailState);
  }, [productDetailState]);

  useEffect(() => {
    loadProduct();
  }, []);

  useEffect(() => {
    if(productDetailState.product.id > 0) {
      loadRating();
      loadRelatedProduct();
    }
  }, [productDetailState.product]);

  const loadProduct = async () => {
    setLoadingAction(true)(dispatch);
    await loadProductAction(params.slug)(dispatch);
  }

  const loadRelatedProduct = async () => {
    loadRelatedProductAction(productDetailState.product.categories.map(item => item.id))(dispatch);
  }

  const loadRating = async () => {
    await loadRatingAction(productDetailState.rating_conditions, productDetailState.product.id)(dispatch);
    setLoadingAction(false)(dispatch);
  }
  
  const value = {
    productDetailState
  }

  return (
    <ProductDetailCotnext.Provider value={value}>
      {props.children}
    </ProductDetailCotnext.Provider>
  )
}

export default ProductDetailProvider;