import { reloadRating, initData, setRatingForm, setStatus, toggleModal } from '@contexts/reducers/client/ProductDetailSlice';
import { BACKEND_URL } from '@utils/contant';
import axios from 'axios';

export const initDataAction = (slug) => async (dispatch) => {
    const payload = {};
    const status = {
        isLoading: false,
        message: "",
        success: true
    }

    const loadProductResult = await loadProductAction(slug);
    if (!loadProductResult.status.success) {
        dispatch(
            setStatus({isLoading: false, message: loadProductResult.status.message, success: false})
        )
        return ;
    } else {
        payload.product = loadProductResult.data;
    }

    const conditions = {
        page: 0,
        size: 10,
        sort: 'createTime__desc'
    };
    const loadRatingResult = await loadRatingAction(conditions, payload.product.id);
    if (!loadRatingResult.status.success) {
        status.success = false;
        status.message += loadRatingResult.status.message;
    } else {
        payload.ratings = loadRatingResult.data;
    }

    const categories = payload
        .product
        .categories
        .map((item) => item.id);
    const loadRelatedProductResult = await loadRelatedProductAction(categories);
    if (!loadRelatedProductResult.status.success) {
        status.success = false;
        status.message += loadRelatedProductResult.status.message;
    } else {
        payload.related_products = loadRelatedProductResult.data;
    }

    payload.status = status;
    dispatch(initData(payload));

}

export const setRatingFormAction = ({field, value}) => dispatch => {
    dispatch(setRatingForm({field, value}))
}

export const setStatusAction = (status) => dispatch => {
    dispatch(setStatus(status));
}

export const submitAction = (rating) => async dispatch => {
    await axios
        .post(`${BACKEND_URL}/ratings`, rating)
        .then(async response => {
            const payload = {};
            payload.status = {isLoading: false, message: response.data.message, success: true};
            payload.ratings = response.data.data;

            const conditions = {
                page: 0,
                size: 10,
                sort: 'createTime__desc'
            };
            const loadRatingResult = await loadRatingAction(conditions, rating.productId);
            if(loadRatingResult.status.success) {
                payload.ratings = loadRatingResult.data;
            }
            dispatch(reloadRating(payload));
        })
        .catch(error => {
            console.log(error);
            setStatusAction(
                {isLoading: false, message: error.response.data.message, success: false}
            )(dispatch);
        })
    }

export const toggleModalAction = () => dispatch => {
    dispatch(toggleModal());
}

const loadProductAction = async (slug) => {
    const result = {
        data: null,
        status: {
            message: '',
            success: true
        }
    }

    await axios
        .get(`${BACKEND_URL}/products/category/product_image/${slug}`)
        .then(response => {
            result.data = response.data.data
        })
        .catch(error => {
            result.status = {
                message: error.response.data.message,
                success: false
            }
        });

    return result;
}

const loadRatingAction = async (conditions, productId) => {
    const result = {
        data: null,
        status: {
            message: '',
            success: true
        }
    }

    await axios
        .get(`${BACKEND_URL}/ratings/user`, {
            params: {
                ...conditions,
                'OR_product.id': productId
            }
        })
        .then(response => {
            result.data = response.data.data
        })
        .catch(error => {
            result.status = {
                message: error.response.data.message,
                success: false
            }
        })

        return result;
    }

const loadRelatedProductAction = async (categoryIds) => {
    const result = {
        data: null,
        status: {
            message: '',
            success: true
        }
    }

    await axios
        .get(`${BACKEND_URL}/products`, {
            params: {
                size: 10,
                'IN_categories.id': categoryIds.join(),
                AND_status: 1
            }
        })
        .then(response => {
            result.data = response.data.data.content
        })
        .catch(error => {
            result.status = {
                message: error.response.data.message,
                success: false
            }
        });

    return result;
}
