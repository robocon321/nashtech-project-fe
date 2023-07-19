/* eslint-disable no-loop-func */
import { setContactSelected, setShippingPrice, setStatus, initData } from '@contexts/reducers/client/CartSlice';
import { BACKEND_URL, DISTRICT_API, PROVINCE_API, SHIPPING_API, WARD_API } from '@utils/contant';
import axios from 'axios';


export const initDataAction = () => async (dispatch) => {
  const payload = {};
  const status = {
    isLoading: true,
    message: "",
    success: true,
  }
  
  const loadContactResult = await loadContactAction();
  if(!loadContactResult.status.success) {
    status.success = false;
    status.message += loadContactResult.status.message;
  } else {
    payload.contacts = loadContactResult.data;
  }

  payload.status = status;
  dispatch(initData(payload));
}

export const setStatusAction = (status) => dispatch => {
    dispatch(setStatus(status));
}

export const loadShippingPriceAction = (contact, cart_items) => async dispatch => {
    let total = 0;
    for (var i = 0; i < cart_items.length; i++) {
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

        await axios
            .post(`${SHIPPING_API}`, data)
            .then(response => {
                total += response.data.data.total * cart_items[i].quantity
            })
            .catch(error => {
              handleError(error)(dispatch);
              return ;
            })
        }

    dispatch(setShippingPrice(total));
}

export const setContactSelectedAction = (contact) => (dispatch) => {
    dispatch(setContactSelected(contact));
}

const loadContactAction = async () => {
  const result = {
    data: null,
    status: {
      message: '',
      success: true
    }
  }

    await axios
        .get(`${BACKEND_URL}/contacts`)
        .then(async (response) => {
            const contacts = response.data.data;

            for (var i = 0; i < contacts.length; i++) {
                await axios
                    .get(`${PROVINCE_API}`)
                    .then((response) => {
                        contacts[i].provinceName = response
                            .data
                            .data
                            .find(item => item.ProvinceID == contacts[i].province)
                            .ProvinceName;
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
                        contacts[i].districtName = response
                            .data
                            .data
                            .find(item => item.DistrictID == contacts[i].district)
                            .DistrictName;
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
                        contacts[i].wardName = response
                            .data
                            .data
                            .find(item => item.WardCode == contacts[i].ward)
                            .WardName;
                    })
                    .catch((error) => {
                        contacts[i].wardName = "";
                    });

                contacts[i].detailAddress = contacts[i].detail + ", " + contacts[i].wardName +
                        ", " + contacts[i].districtName + ", " + contacts[i].provinceName;
            }

            result.data = contacts;
        })
        .catch((error) => {
          result.status = {
            message: error.response.data.message,
            success: false
          }    
        });

        return result;
}

const handleError = (error) => (dispatch) => {
  dispatch(setStatus({
    message: error.response.data.message,
    success: false,
    isLoading: false
  }));
}
