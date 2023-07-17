import { createContext, useReducer, useEffect } from "react";

import {
  changeFieldAction,
  loadCategoriesAction,
  submitAction,
  setStatusAction,
  setLoadingAction,
  loadProductAction
} from "@contexts/actions/admin/UpdateProductAction";
import UpdateProductReducer from "@contexts/reducers/admin/UpdateProductReducer";
import { validateSlug } from '@utils/validate';
import { useParams } from "react-router-dom";

const initState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  categories: [],
  product: {}
};
export const UpdateProductAdminContext = createContext();

const UpdateProductAdminProvider = props => {
  const [updateProductAdminState, dispatch] = useReducer(
    UpdateProductReducer,
    initState
  );

  const params = useParams();

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if(updateProductAdminState.product.categories && updateProductAdminState.product.categories.length > 0) {
      const categoryEles = document.getElementsByName("category");
      for(var i = 0; i < categoryEles.length; i ++) {
        if(updateProductAdminState.product.categories.includes(parseInt(categoryEles[i].value))) {
          categoryEles[i].checked = true;
        }
      } 
    }
  }, [updateProductAdminState.product.categories])

  const loadData = async () => {
    setLoadingAction(true)(dispatch);

    await loadCategoriesAction()(dispatch);
    await loadProductAction(params.slug)(dispatch);

    setLoadingAction(false)(dispatch);
  }

  const changeField = (e) => {
    changeFieldAction({
      field: e.target.name, 
      value: e.target.value
    })(dispatch);
  }

  const changeThumbnail = (e) => {
    changeFieldAction({
      field: e.target.name, 
      value: e.target.files[0]
    })(dispatch);  
  }

  const changeGallery = (e) => {
    const files = [];
    for(var i = 0; i < e.target.files.length; i ++) {
      files.push(e.target.files[i]);
    }

    changeFieldAction({
      field: e.target.name, 
      value: files
    })(dispatch); 
  }

  const changeRichtext = (event, editor) => {
    changeFieldAction({
      field: 'fullDescription',
      value: editor.getData()
    })(dispatch);
  }

  const changeCategory = () => {
    const categoryEles = document.getElementsByName("category");
    const listCategorySelected = [];
    for(var i = 0; i < categoryEles.length; i ++) {
      if(categoryEles[i].checked) listCategorySelected.push(categoryEles[i].value);
    }
    
    changeFieldAction({
      field: 'categories',
      value: listCategorySelected
    })(dispatch);
  }

  const resetStatus = () => {
    setStatusAction({
      isLoading: false,
      message: '',
      success: true
    })(dispatch);
  };

  const submitForm = () => {
    if(validateForm()) {
      submitAction(updateProductAdminState.product)(dispatch);
    }
  }

  const validateForm = () => {
        if(!updateProductAdminState.product.name || updateProductAdminState.product.name.trim().length === 0) {
      setStatusAction({
        isLoading: false,
        message: 'Product name not blank',
        success: false
      })(dispatch);
      return false;
    }

    if(!updateProductAdminState.product.description || updateProductAdminState.product.description.trim().length === 0) {
      setStatusAction({
        isLoading: false,
        message: 'Product short description not blank',
        success: false
      })(dispatch);
      return false;
    }

    if(!updateProductAdminState.product.realPrice) {
      setStatusAction({
        isLoading: false,
        message: 'Product real price not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!updateProductAdminState.product.sellPrice) {
      setStatusAction({
        isLoading: false,
        message: 'Product sell price not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!updateProductAdminState.product.width) {
      setStatusAction({
        isLoading: false,
        message: 'Product width not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!updateProductAdminState.product.height) {
      setStatusAction({
        isLoading: false,
        message: 'Product height not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!updateProductAdminState.product.length) {
      setStatusAction({
        isLoading: false,
        message: 'Product length not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!updateProductAdminState.product.weight) {
      setStatusAction({
        isLoading: false,
        message: 'Product weight not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!updateProductAdminState.product.categories || updateProductAdminState.product.categories.length === 0) {
      setStatusAction({
        isLoading: false,
        message: 'Product categories not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!updateProductAdminState.product.stock) {
      setStatusAction({
        isLoading: false,
        message: 'Product stock not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!updateProductAdminState.product.slug || updateProductAdminState.product.slug.trim().length === 0 || !validateSlug(updateProductAdminState.product.slug.trim())) {
      setStatusAction({
        isLoading: false,
        message: 'Slug incorrect format',
        success: false
      })(dispatch);
      return false;
    }

    return true;
  }

  const switchVisible = (value) => {
    changeFieldAction({field: 'status', value})(dispatch);
  }
  
  const value = {
    updateProductAdminState,
    changeField,
    changeThumbnail,
    changeGallery,
    changeRichtext,
    changeCategory,
    submitForm,
    resetStatus,
    switchVisible
  };

  return (
    <UpdateProductAdminContext.Provider value={value}>
      {props.children}
    </UpdateProductAdminContext.Provider>
  )
}

export default UpdateProductAdminProvider;
