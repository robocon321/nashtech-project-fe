import { createContext, useReducer, useEffect } from "react";

import {
  loadCategoryAction,
  setFieldConditionAction,
  setSelectedAction,
  changeFieldAction,
  resetCategoryAction,
  setStatusAction,
  setCategoryAction,
  deleteCategoryAction,
  submitFormAction
} from "../../actions/admin/CategoryAdminAction";
import CategoryAdminReducer from "../../reducers/admin/CategoryAdminReducer";
import { validateSlug } from '../../../utils/validate';

const initState = {
  category: {
    status: 1
  },
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  categories: null,
  conditions: {
    page: 0,
    size: 10,
    sort: "id__asc",
  },
  selected: [],
};

export const CategoryAdminContext = createContext();

const CategoryAdminProvider = (props) => {
  const [categoryAdminState, dispatch] = useReducer(
    CategoryAdminReducer,
    initState
  );

  useEffect(() => {
    console.log(categoryAdminState);
  }, [categoryAdminState]);

  useEffect(() => {
    loadCategoryAction(categoryAdminState.conditions)(dispatch);
  }, [categoryAdminState.conditions]);

  const setPage = (page) => {
    setFieldConditionAction({
      field: "page",
      value: page,
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

  const changeField = (e) => {
    changeFieldAction({ field: e.target.name, value: e.target.value })(dispatch);
  };

  const switchVisible = (value) => {
    changeFieldAction({field: 'status', value})(dispatch);
  }

  const resetCategory = () => {
    resetCategoryAction()(dispatch);
  }

  const submitForm = async () => {
    if(validateForm()) {
      await submitFormAction(categoryAdminState.category)(dispatch);
    }
  }

  const validateForm = () => {
    if(!categoryAdminState.category.name || categoryAdminState.category.name.trim().length === 0) {
      setStatusAction({
        isLoading: false,
        message: 'Category name not blank',
        success: false
      })(dispatch);
      return false;
    }

    if(!categoryAdminState.category.description || categoryAdminState.category.description.trim().length === 0) {
      setStatusAction({
        isLoading: false,
        message: 'Category description not blank',
        success: false
      })(dispatch);
      return false;
    }

    if(!categoryAdminState.category.slug || categoryAdminState.category.slug.trim().length === 0 || !validateSlug(categoryAdminState.category.slug.trim())) {
      setStatusAction({
        isLoading: false,
        message: 'Slug incorrect format',
        success: false
      })(dispatch);
      return false;
    }

    return true;
  }

  const setCategory = (id) => {
    const category = categoryAdminState.categories.content.find(item => item.id === id);
    if(category) {
      setCategoryAction(category)(dispatch);
    } else {
      setCategoryAction({})(dispatch);
    }
  }

  const resetStatus = () => {
    setStatusAction({
      isLoading: false,
      message: '',
      success: false
    })(dispatch);
  }

  const deleteCategory = async (ids) => {
    await deleteCategoryAction(ids)(dispatch);
  }

  const value = {
    categoryAdminState,
    setPage,
    setSize,
    setSort,
    setSelected,
    setSearch,
    changeField,
    resetCategory,
    validateForm,
    submitForm,
    setCategory,
    switchVisible,
    deleteCategory,
    resetStatus
  };

  return (
    <CategoryAdminContext.Provider value={value}>
      {props.children}
    </CategoryAdminContext.Provider>
  );
};

export default CategoryAdminProvider;
