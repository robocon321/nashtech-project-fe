import axios from 'axios';
import {BACKEND_URL} from '@utils/contant';
import {
    addCartItem,
    deleteCartItem,
    initData,
    setSearch,
    setShowModal,
    setStatus,
    updateCartItem
} from '@contexts/reducers/client/ClientLayoutReducer';

export const initDataAction = (user) => async dispatch => {
    const payload = {};
    const status = {
        isLoading: false,
        message: "",
        success: true
    }
    const loadCategoryResult = await loadCategoryAction();
    if (!loadCategoryResult.status.success) {
        status.success = false;
        status.message += loadCategoryResult.status.message;
    } else {
        payload.categories = loadCategoryResult.data;
    }

    if (user.id != null) {
        const loadCartItemResult = await loadCartItemAction();
        if (!loadCartItemResult.status.success) {
            status.success = false;
            status.message += loadCartItemResult.status.message;
        } else {
            payload.cart = loadCartItemResult.data;
        }
    }

    payload.status = status;
    dispatch(initData(payload));

}

export const setSearchAction = (search) => dispatch => {
    dispatch(setSearch(search));
}

export const setStatusAction = (status) => dispatch => {
    dispatch(setStatus(status));
}

export const saveCartItemAction = (cartItem) => async dispatch => {
    await axios
        .post(`${BACKEND_URL}/cart_items`, cartItem)
        .then(response => {
            dispatch(addCartItem(response.data.data));
        })
        .catch(error => {
            handleError(error)(dispatch);
        })
    }

export const deleteCartItemAction = (ids) => async dispatch => {
    await axios
        .delete(`${BACKEND_URL}/cart_items`, {data: ids})
        .then(response => {
            dispatch(deleteCartItem(ids));
        })
        .catch(error => {
            handleError(error)(dispatch);
        })
    }

export const updateCartItemAction = (cartItem) => async dispatch => {
    await axios
        .put(`${BACKEND_URL}/cart_items`, cartItem)
        .then(response => {
            dispatch(updateCartItem(cartItem))
        })
        .catch(error => {
            handleError(error)(dispatch);
        })
    }

export const setShowModalAction = (isShow) => dispatch => {
    dispatch(setShowModal(isShow));
}

const loadCategoryAction = async () => {
    const result = {
        data: null,
        status: {
            message: '',
            success: true
        }
    }

    await axios
        .get(`${BACKEND_URL}/categories`, {
            params: {
                size: 100,
                AND_status: 1
            }
        })
        .then(response => {
            result.data = response.data.data.content;
        })
        .catch(error => {
            result.status = {
                message: error.response.data.message,
                success: false
            }
        });

    return result;
}

const loadCartItemAction = async () => {
    const result = {
        data: null,
        status: {
            message: '',
            success: true
        }
    }

    await axios
        .get(`${BACKEND_URL}/carts/cart_item/product`)
        .then(response => {
            result.data = response.data.data;
        })
        .catch(error => {
            result.status = {
                message: error.response.data.message,
                success: false
            }
        });

    return result;
}

const handleError = (error) => (dispatch) => {
    dispatch(
        setStatus({message: error.response.data.message, success: false, isLoading: false})
    );
}
