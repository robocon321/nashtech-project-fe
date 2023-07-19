import {
  initDataAction,
  loadShippingPriceAction,
  setContactSelectedAction,
  setStatusAction,
} from "@contexts/actions/client/CartAction";
import { ClientLayoutContext } from "@providers/client/ClientLayoutProvider";
import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CartContext = createContext();

const CartProvider = (props) => {
  const { clientState, updateCartItem, deleteCartItem } =
    useContext(ClientLayoutContext);
  const cartState = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();
  console.log(cartState);

  useEffect(() => {
    initDataAction();
  }, []);

  useEffect(() => {
    if(clientState.cart.cartItems && cartState.contactSelected) {
      loadShippingPriceAction(cartState.contactSelected, clientState.cart.cartItems)(dispatch);
    }
  }, [cartState.contactSelected, clientState.cart.cartItems, dispatch])

  const changeAddressShipping = (e) => {
    const contact = cartState.contacts.find(item => item.id == e.target.value);
    setContactSelectedAction(contact)(dispatch);
  }
  
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
