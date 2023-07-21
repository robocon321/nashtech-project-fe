import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  deleteProductAction,
  loadCategoriesAction,
  loadProductAction,
  setFieldConditionAction,
  setSelectedAction,
  setStatusAction
} from "@contexts/actions/admin/ProductAdminAction";
import { useDispatch, useSelector } from "react-redux";

export const ProductAdminContext = createContext();

const ProductAdminProvider = (props) => {
  const dispatch = useDispatch();
  const productAdminState = useSelector(state => state.productAdminReducer);

  const navigate = useNavigate();

  useEffect(() => {
    loadCategoriesAction()(dispatch);
  }, []);

  useEffect(() => {
    loadProductAction(productAdminState.conditions)(dispatch);
  }, [productAdminState.conditions]);

  const setPage = (page) => {
    setFieldConditionAction({
      field: "page",
      value: page,
    })(dispatch);
  };

  const setPrice = (value) => {
    setFieldConditionAction({
      field: "BT_sellPrice",
      value
    })(dispatch);
  };

  const setSize = (size) => {
    setFieldConditionAction({
      field: "size",
      value: size,
    })(dispatch);
  };

  const setSort = (sort) => {
    if(sort[0].field == 'visibleType') {
      setFieldConditionAction({
        field: "sort",
        value: sort.length ? 'status' + "__" + sort[0].sort : "id__asc",
      })(dispatch);
        
    } else {
      setFieldConditionAction({
        field: "sort",
        value: sort.length ? sort[0].field + "__" + sort[0].sort : "id__asc",
      })(dispatch);  
    }   
  };

  const setSelected = (selected) => {
    setSelectedAction(selected)(dispatch);
  };

  const setSearch = (e) => {
    setFieldConditionAction({
      field: e.target.name,
      value: e.target.value,
    })(dispatch);
  };

  const setRating = (star) => {
    setFieldConditionAction({
      field: 'BT_rating',
      value: star
    })(dispatch);
  };

  const changeCategory = () => {
    const categoryEles = document.getElementsByName("category");
    const listCategorySelected = [];
    for(var i = 0; i < categoryEles.length; i ++) {
      if(categoryEles[i].checked) listCategorySelected.push(categoryEles[i].value);
    }
    setFieldConditionAction({
      field: 'IN_categories.id',
      value: listCategorySelected.join(',')
    })(dispatch);
  }

  const resetStatus = () => {
    setStatusAction({
      isLoading: false,
      message: '',
      success: false
    })(dispatch);
  }

  const deleteProduct = async (ids) => {
    await deleteProductAction(ids)(dispatch);
  }

  const value = {
    productAdminState,
    navigate,
    setPage,
    setSize,
    setSort,
    setSelected,
    setSearch,
    deleteProduct,
    resetStatus,
    setRating,
    setPrice,
    changeCategory
  };

  return (
    <ProductAdminContext.Provider value={value}>
      {props.children}
    </ProductAdminContext.Provider>
  );
};

export default ProductAdminProvider;
