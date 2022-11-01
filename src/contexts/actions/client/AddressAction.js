import axios from "axios";
import {
  BACKEND_URL,
  PROVINCE_API,
  DISTRICT_API,
  WARD_API,
  SHIPPING_TOKEN,
  SHIPPING_API,
} from "../../../utils/contant";

axios.defaults.headers.common["token"] = SHIPPING_TOKEN;

export const ACTIONS = {
  SET_STATUS: "SET_STATUS",
  SET_MESSAGE: "SET_MESSAGE",
  SET_LOADING: "SET_LOADING",
  SET_SUCCESS: "SET_SUCCESS",
  SET_PROVINCES: "SET_PROVINCES",
  SET_DISTRICTS: "SET_DISTRICTS",
  SET_WARDS: "SET_WARDS",
  SET_FIELD_CONTACT: "SET_FIELD_CONTACT",
  SET_SHOW_MODAL: "SET_SHOW_MODAL",
  SET_CONTACTS: "SET_CONTACTS"
};

export const loadContactAction = () => async (dispatch) => {
  await axios
    .get(`${BACKEND_URL}/contacts`)
    .then(async (response) => {
      const contacts = response.data.data;

      for(var i = 0; i < contacts.length; i ++) {
        await axios
        .get(`${PROVINCE_API}`)
        .then((response) => {
            contacts[i].provinceName = response.data.data.find(item => item.ProvinceID == contacts[i].province).ProvinceName;          
        })
        .catch((error) => {
          contacts[i].provinceName = "";
        });

        await axios
        .get(`${DISTRICT_API}`, {
          params: {
            province_id: contacts[i].province
          }
        })
        .then((response) => {
          contacts[i].districtName = response.data.data.find(item => item.DistrictID == contacts[i].district).DistrictName;          
        })
        .catch((error) => {
          contacts[i].districtName = "";
        });

        await axios
        .get(`${WARD_API}`, {
          params: {
            district_id: contacts[i].district
          }
        })
        .then((response) => {
          contacts[i].wardName = response.data.data.find(item => item.WardCode == contacts[i].ward).WardName;          
        })
        .catch((error) => {
          contacts[i].wardName = "";
        });

        }

        
        dispatch({
          type: ACTIONS.SET_CONTACTS,
          payload: contacts
        })
      })      
    .catch((error) => {
      dispatch({
        type: ACTIONS.SET_MESSAGE,
        payload: error.response.data.message,
      });
      dispatch({
        type: ACTIONS.SET_SUCCESS,
        payload: false,
      });
    });
  
}

export const loadProvinceAction = () => async (dispatch) => {
  await axios
    .get(`${PROVINCE_API}`)
    .then((response) => {
      dispatch({
        type: ACTIONS.SET_PROVINCES,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ACTIONS.SET_MESSAGE,
        payload: error.response.data.message,
      });
      dispatch({
        type: ACTIONS.SET_SUCCESS,
        payload: false,
      });
    });
};

export const loadDistrictAction = (provinceId) => async (dispatch) => {
  if(provinceId) {
    await axios
    .get(`${DISTRICT_API}`, {
      params: {
        province_id: provinceId
      }
    })
    .then((response) => {
      dispatch({
        type: ACTIONS.SET_DISTRICTS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ACTIONS.SET_MESSAGE,
        payload: error.response.data.message,
      });
      dispatch({
        type: ACTIONS.SET_SUCCESS,
        payload: false,
      });
    });    
  }
};

export const loadWardAction = (districtId) => async (dispatch) => {
  if(districtId) {
    await axios
    .get(`${WARD_API}`, {
      params: {
        district_id: districtId
      }
    })
    .then((response) => {
      console.log(response);
      dispatch({
        type: ACTIONS.SET_WARDS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ACTIONS.SET_MESSAGE,
        payload: error.response.data.message,
      });
      dispatch({
        type: ACTIONS.SET_SUCCESS,
        payload: false,
      });
    });    
  }
};

export const setFieldContactAction = ({field, value}) => dispatch => {
  dispatch({
    type: ACTIONS.SET_FIELD_CONTACT,
    payload: {
      field, value
    }
  })
}

export const setStatusAction = (status) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_STATUS,
    payload: status,
  });
};

export const setLoadingAction = (isLoading) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading,
  });
};

export const setMessageAction = (message) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_MESSAGE,
    payload: message,
  });
};

export const setSuccessAction = (success) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_SUCCESS,
    payload: success,
  });
};

export const setShowModalAction = (isShow) => dispatch => {
  dispatch({
    type: ACTIONS.SET_SHOW_MODAL,
    payload: isShow
  })
}

export const submitAction = (contact) => async dispatch => {
  await axios.post(`${BACKEND_URL}/contacts`, contact).then(response => {
    loadContactAction()(dispatch);
  }).catch(error => {
    dispatch({
      type: ACTIONS.SET_MESSAGE,
      payload: error.response.data.message
    });
    dispatch({
      type: ACTIONS.SET_SUCCESS,
      payload: false
    })
  }) 

} 