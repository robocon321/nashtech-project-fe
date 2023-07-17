import axios from 'axios';
import { BACKEND_URL, DISTRICT_API, PROVINCE_API, SHIPPING_API, WARD_API } from '@utils/contant';

export const ACTIONS = {
  SET_STATUS: 'SET_STATUS',
  SET_LOADING: 'SET_LOADING',
  SET_MESSAGE: 'SET_MESSAGE',
  SET_SUCCESS: 'SET_SUCCESS',
  SET_CONTACTS: "SET_CONTACTS",
  SET_SHIPPING_PRICE: "SET_SHIPPING_PRICE",
  SET_CONTACT_SELECTED: "SET_CONTACT_SELECTED"
}

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

        contacts[i].detailAddress = contacts[i].detail + ", " + contacts[i].wardName + ", " + contacts[i].districtName + ", " + contacts[i].provinceName; 
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

export const setStatusAction = (status) => dispatch => {
  dispatch({
    type: ACTIONS.SET_STATUS,
    payload: status
  })
}

export const setLoadingAction = (isLoading) => dispatch => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading
  })
}

export const setMessageAction = (message) => dispatch => {
  dispatch({
    type: ACTIONS.SET_MESSAGE,
    payload: message
  })
}

export const setSuccessAction = (success) => dispatch => {
  dispatch({
    type: ACTIONS.SET_SUCCESS,
    payload: success
  })
}

export const loadShippingPriceAction = (contact, cart_items) => async dispatch => {
  let total = 0;
  for(var i = 0; i < cart_items.length; i ++) {
    let data = {
      service_type_id: 2,
      from_district_id: 3695,
      to_ward_code: contact.ward,
      to_district_id: parseInt(contact.district),
      weight: cart_items[i].product.weight,
      length: cart_items[i].product.length,
      width: cart_items[i].product.width,
      height: cart_items[i].product.height
    };

    await axios.post(`${SHIPPING_API}`, data)
    .then(response => {
      total += response.data.data.total * cart_items[i].quantity
    })
    .catch(error => {
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

  dispatch({
    type: ACTIONS.SET_SHIPPING_PRICE,
    payload: total
  });
}

export const setContactSelectedAction = (contact) => dispatch => {
  dispatch({
    type: ACTIONS.SET_CONTACT_SELECTED,
    payload: contact
  })
}