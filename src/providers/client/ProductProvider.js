/* eslint-disable react-hooks/exhaustive-deps */
import { fileterProductAction, initDataAction } from '@contexts/actions/client/ProductAction';
import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ClientLayoutContext } from './ClientLayoutProvider';

export const ProductContext = createContext();

const ProductProvider = props => {
  const { clientState } = useContext(ClientLayoutContext);

  const dispatch = useDispatch();
  const productState = useSelector(state => state.productReducer);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    initDataAction()(dispatch);
  }, []);

  useEffect(() => {
    if(clientState.search === undefined) {
      fileterProductAction({})(dispatch);
      return ;
    }
    setField({
      field: 'LIKE_name',
      value: clientState.search
    });
  }, [clientState.search]);

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
    const conditions = Object.fromEntries([...searchParams]);
    conditions[field] = value; 
    fileterProductAction(conditions)(dispatch);
    navigate({
      pathname: '/product',
      search: createSearchParams(conditions).toString()
    });
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