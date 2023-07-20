import React, {createContext, useEffect} from "react";

import {withNamespaces} from 'react-i18next';
import i18n from '../../i18n';

import {
    deleteCartItemAction,
    initDataAction,
    saveCartItemAction,
    setSearchAction,
    setShowModalAction,
    setStatusAction,
    updateCartItemAction
} from "@contexts/actions/client/ClientLayoutAction";
import {AppContext} from '@providers/AppProvider';
import {useContext} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const ClientLayoutContext = createContext();

const ClientLayoutProvider = (props) => {
    const navigate = useNavigate();
    const clientState = useSelector(state => state.clientLayoutReducer);
    const dispatch = useDispatch();
    console.log(clientState);
    const {appState} = useContext(AppContext);

    useEffect(() => {
        initDataAction(appState.user)(dispatch);
    }, [appState.user, dispatch]);

    const onSearch = () => {
        const searchStr = document
            .getElementById("search")
            .value;
        navigate("/product?LIKE_name=" + searchStr);
        setSearchAction(searchStr)(dispatch);
    };

    const saveCartItem = async (cartItem) => {
        if (appState.user) {
            saveCartItemAction(cartItem)(dispatch);
        } else {
            setShowModal(true);
        }
    };

    const deleteCartItem = async (ids) => {
        deleteCartItemAction(ids)(dispatch);
    };

    const updateCartItem = async (cartItem) => {
        updateCartItemAction(cartItem)(dispatch);
    };

    const resetStatus = () => {
        setStatusAction({isLoading: false, message: "", success: true})(dispatch);
    };

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    }

    const setShowModal = (isShow) => {
        setShowModalAction(isShow)(dispatch);
    }

    const value = {
        clientState,
        onSearch,
        saveCartItem,
        deleteCartItem,
        updateCartItem,
        resetStatus,
        changeLang,
        t: props.t,
        lang: i18n.language,
        setShowModal
    };

    return (
        <ClientLayoutContext.Provider value={value}>
            {!clientState.status.isLoading && props.children}
        </ClientLayoutContext.Provider>
    );
};

export default withNamespaces()(ClientLayoutProvider);