import { createContext, useReducer, useEffect } from "react";

import {
  changeFieldAction,
  loadCategoriesAction,
  submitAction,
  setStatusAction
} from "../../actions/admin/NewProductAdminAction";
import NewProductAdminReducer from "../../reducers/admin/NewProductAdminReducer";
import { validateSlug } from '../../../utils/validate';

const initState = {
  status: {
    isLoading: false,
    message: "",
    success: false,
  },
  categories: [],
  product: {}
};

export const NewProductAdminContext = createContext();

const ProductAdminProvider = (props) => {
  const [newProductAdminState, dispatch] = useReducer(
    NewProductAdminReducer,
    initState
  );

  useEffect(() => {
    loadCategoriesAction()(dispatch);
  }, []);

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
      submitAction(newProductAdminState.product)(dispatch);
    }
  }

  const validateForm = () => {
    if(!newProductAdminState.product.name || newProductAdminState.product.name.trim().length === 0) {
      setStatusAction({
        isLoading: false,
        message: 'Product name not blank',
        success: false
      })(dispatch);
      return false;
    }

    if(!newProductAdminState.product.description || newProductAdminState.product.description.trim().length === 0) {
      setStatusAction({
        isLoading: false,
        message: 'Product short description not blank',
        success: false
      })(dispatch);
      return false;
    }

    if(!newProductAdminState.product.thumbnail) {
      setStatusAction({
        isLoading: false,
        message: 'Product thumbnail not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!newProductAdminState.product.realPrice) {
      setStatusAction({
        isLoading: false,
        message: 'Product real price not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!newProductAdminState.product.sellPrice) {
      setStatusAction({
        isLoading: false,
        message: 'Product sell price not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!newProductAdminState.product.width) {
      setStatusAction({
        isLoading: false,
        message: 'Product width not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!newProductAdminState.product.height) {
      setStatusAction({
        isLoading: false,
        message: 'Product height not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!newProductAdminState.product.length) {
      setStatusAction({
        isLoading: false,
        message: 'Product length not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!newProductAdminState.product.weight) {
      setStatusAction({
        isLoading: false,
        message: 'Product weight not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!newProductAdminState.product.categories || newProductAdminState.product.categories.length === 0) {
      setStatusAction({
        isLoading: false,
        message: 'Product categories not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!newProductAdminState.product.stock) {
      setStatusAction({
        isLoading: false,
        message: 'Product stock not null',
        success: false
      })(dispatch);
      return false;
    }

    if(!newProductAdminState.product.slug || newProductAdminState.product.slug.trim().length === 0 || !validateSlug(newProductAdminState.product.slug.trim())) {
      setStatusAction({
        isLoading: false,
        message: 'Slug incorrect format',
        success: false
      })(dispatch);
      return false;
    }

    return true;
  }
  
  const value = {
    newProductAdminState,
    changeField,
    changeThumbnail,
    changeGallery,
    changeRichtext,
    changeCategory,
    submitForm,
    resetStatus
  };

  return (
    <NewProductAdminContext.Provider value={value}>
      {props.children}
    </NewProductAdminContext.Provider>
  );
};

export default ProductAdminProvider;
