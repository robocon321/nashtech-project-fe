import React, { createContext, useEffect, useReducer } from 'react';
import { useContext } from 'react';
import { loadPopularProductAction, loadProductAction, setConditionAction, setFieldAction, setLoadingAction } from '@contexts/actions/client/ProductAction';
import ProductReducer from '@contexts/reducers/client/ProductReducer';
import { ClientLayoutContext } from './ClientLayoutProvider'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

const initState = {
  products: {},
  status: {
    isLoading: true,
    message: '',
    success: true
  },
  conditions: {
    page: 0,
    size: 12,
    sort: 'createTime__desc'
  },
  popular_products: []
}

export const ProductContext = createContext();

const ProductProvider = props => {
  const { clientState } = useContext(ClientLayoutContext);
  const [ productState, dispatch ] = useReducer(ProductReducer, initState);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setField({
      field: 'LIKE_name',
      value: clientState.search
    });
  }, [clientState.search]);

  useEffect(() => {
    const conditions = Object.fromEntries([...searchParams]);
    setConditionAction(conditions)(dispatch);
  }, []);

  useEffect(() => {
    navigate({
      pathname: '/product',
      search: `?${createSearchParams(productState.conditions)}`,
    });

    loadData();
  }, [productState.conditions]);

  const loadData = async () => {
    setLoadingAction(true)(dispatch);
    await loadProductAction(productState.conditions)(dispatch);
    await loadPopularProductAction()(dispatch);
    setLoadingAction(false)(dispatch);
  }

  const changePageCondition = (event, value) => {
    setField({
      field: 'page',
      value: value - 1
    });
  };

  const changeFieldCondition = (e) => {  
    setField({
      field: e.target.name,
      value: e.target.value
    });
  }

  const setField = ({field, value}) => {
    setFieldAction({
      field,
      value
    })(dispatch);
  }

  const changeCategory = () => {
    const categoryEles = document.getElementsByName("category");
    const listCategorySelected = [];
    for(var i = 0; i < categoryEles.length; i ++) {
      if(categoryEles[i].checked) listCategorySelected.push(categoryEles[i].value);
    }
    setField({field: 'IN_categories.id', value: listCategorySelected.join(',')});
  }

  const value = {
    productState,
    changePageCondition,
    changeFieldCondition,
    setField,
    changeCategory,
    categories: clientState.categories,
  };
  
  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  ) 
}


export default ProductProvider;