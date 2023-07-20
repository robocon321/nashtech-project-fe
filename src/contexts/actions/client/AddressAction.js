import axios from "axios";
import {
  BACKEND_URL,
  PROVINCE_API,
  DISTRICT_API,
  WARD_API,
  SHIPPING_TOKEN,
} from "@utils/contant";
import {   
  setDistricts,
  setFieldContact,
  setWards,
  setShowModal,
  setStatus,
  initData,
  setContacts
 } from "@contexts/reducers/client/AddressSlice";

axios.defaults.headers.common["token"] = SHIPPING_TOKEN;

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

  const loadProvinceResult = await loadProvinceAction();
  if(!loadProvinceResult.status.success) {
    status.success = false;
    status.message += loadProvinceResult.status.message;
  } else {
    payload.provinces = loadProvinceResult.data;
  }

  payload.status = status;
  dispatch(initData(payload));
}

export const loadDistrictAction = (provinceId) => async (dispatch) => {
  if(provinceId) {
    await axios
    .get(`${DISTRICT_API}`, {
      params: {
        province_id: provinceId
      }
    })
    .then((response) => {
      dispatch(setDistricts(response.data.data));
    })
    .catch((error) => {
      handleError(error)(dispatch);
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
      dispatch(setWards(response.data.data));
    })
    .catch((error) => {
      handleError(error);
    });    
  }
};

export const setFieldContactAction = ({field, value}) => dispatch => {
  dispatch(setFieldContact({field, value}));
}

export const setStatusAction = (status) => (dispatch) => {
  dispatch(setStatus(status));
};

export const setShowModalAction = (isShow) => dispatch => {
  dispatch(setShowModal(isShow));
}

export const submitAction = (contact) => async dispatch => {
  await axios.post(`${BACKEND_URL}/contacts`, contact).then(async (response) => {
    const loadContactResult = await loadContactAction();
    if(loadContactResult.status.success) dispatch(setContacts(loadContactResult.data));
    else handleError(loadContactResult.error);
  }).catch(error => {
    handleError(error)(dispatch);
  })
}

const handleError = (error) => (dispatch) => {
  dispatch(setStatus({
    message: error.response.data.message,
    success: false,
    isLoading: false
  }));
}

const loadContactAction = async() => {
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

      for(let i = 0; i < contacts.length; i ++) {
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

const loadProvinceAction = async () => {
  const result = {
    data: null,
    status: {
      message: '',
      success: true
    }
  }

  await axios
    .get(`${PROVINCE_API}`)
    .then((response) => {
      result.data = response.data.data;
    })
    .catch((error) => {
      result.status = {
        message: error.response.data.message,
        success: false
      }
    });
    
    return result;
};
