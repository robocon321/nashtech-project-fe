import { createContext, useReducer, useEffect } from "react";

import {
  loadProductAction,
  setFieldConditionAction,
  setSelectedAction,
  setStatusAction,
  deleteProductAction,
  loadCategoriesAction
} from "../../actions/admin/ProductAdminAction";
import ProductAdminReducer from "../../reducers/admin/ProductAdminReducer";

const initState = {
  status: {
    isLoading: false,
    message: "",
    success: false,
  },
  products: null,
  conditions: {
    page: 0,
    size: 10,
    sort: "id__asc"
  },
  selected: [],
  categories: []
};

export const ProductAdminContext = createContext();

const ProductAdminProvider = (props) => {
  const [productAdminState, dispatch] = useReducer(
    ProductAdminReducer,
    initState
  );

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
      field: 'OR_categories.id',
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
