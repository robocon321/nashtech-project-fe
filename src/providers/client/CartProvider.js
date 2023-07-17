import React, { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import {
  loadContactAction,
  loadShippingPriceAction,
  setContactSelectedAction,
  setLoadingAction,
  setStatusAction,
} from "@contexts/actions/client/CartAction";
import CartReducer from "@contexts/reducers/client/CartReducer";
import { ClientLayoutContext } from "@providers/client/ClientLayoutProvider";

const initState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  contacts: [],
  ship: 0,
  contactSelected: null
};

export const CartContext = createContext();

const CartProvider = (props) => {
  const { clientState, updateCartItem, deleteCartItem } =
    useContext(ClientLayoutContext);
  const [cartState, dispatch] = useReducer(CartReducer, initState);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if(clientState.cart.cartItems && cartState.contactSelected) {
      loadShippingPriceAction(cartState.contactSelected, clientState.cart.cartItems)(dispatch);
    }
  }, [cartState.contactSelected, clientState.cart.cartItems])

  useEffect(() => {
    console.log(cartState);
  }, [cartState]);

  const changeAddressShipping = (e) => {
    const contact = cartState.contacts.find(item => item.id == e.target.value);
    setContactSelectedAction(contact)(dispatch);
  }


  const loadData = async () => {
    setLoadingAction(true)(dispatch);

    await loadContactAction()(dispatch);

    setLoadingAction(false)(dispatch);
  };

  
  const resetStatus = () => {
    setStatusAction({
      isLoading: false,
      message: "",
      success: true,
    })(dispatch);
  };

  const value = {
    cartState,
    clientState,
    updateCartItem,
    deleteCartItem,
    changeAddressShipping,
    resetStatus
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
