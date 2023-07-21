import axios from "axios";
import {BACKEND_URL} from "@utils/contant";
import {
    deleteUser,
    setConditions,
    setFieldCondition,
    setSelected,
    setStatus,
    setUsers
} from "@contexts/reducers/admin/UserAdminReducer";

export const setStatusAction = (status) => (dispatch) => {
    dispatch(setStatus(status));
};

export const loadUserAction = (conditions) => async (dispatch) => {
    await axios
        .get(`${BACKEND_URL}/users`, {
            params: {
                ...conditions
            }
        })
        .then((response) => {
            dispatch(setUsers(response.data.data));
        })
        .catch((error) => {
            handleError(error)(dispatch);
        });
};

export const setFieldConditionAction = ({field, value}) => (dispatch) => {
    dispatch(setFieldCondition({field, value}));
};

export const setConditionAction = (conditions) => (dispatch) => {
    dispatch(setConditions(conditions));
};

export const setSelectedAction = (selected) => (dispatch) => {
    dispatch(setSelected(selected));
};

export const deleteUserAction = (ids) => async (dispatch) => {
    await axios
        .delete(`${BACKEND_URL}/users`, {data: ids})
        .then((response) => {
            const payload = {};
            payload.status = {
              isLoading: true,
              message: response.data.message,
              success: response.data.success,
            };
            payload.ids = ids;
            dispatch(deleteUser(payload));
        })
        .catch((error) => {
            handleError(error)(dispatch);
        });
};

const handleError = (error) => (dispatch) => {
    dispatch(
        setStatus({message: error.response.data.message, success: false, isLoading: false})
    );
}
