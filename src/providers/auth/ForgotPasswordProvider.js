import React, {useReducer, createContext} from 'react';

import { setEmailAction, setStatusAction, submitAction } from '@contexts/actions/auth/ForgotPasswordAction';
import ForgotPasswordReducer from '@contexts/reducers/auth/ForgotPasswordReducer';
import { validateEmail } from '@utils/validate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ForgotPasswordContext = createContext();

const ForgotPasswordProvider = props => {
  const dispatch = useDispatch();
  const forgotPassState = useSelector(state => state.forgotPasswordReducer);

  useEffect(() => {
    setStatusAction({
      isLoading: false,
      message: '',
      success: true
    })(dispatch);
  }, []);

  const setEmail = e => {
    setEmailAction(e.target.value)(dispatch);
  }

  const submit = async (e) => {
    e.preventDefault();
    if(validate()) {
      await submitAction(forgotPassState.email)(dispatch);
    }
  } 

  const validate = () => {
    if(forgotPassState.email.trim() == '' || !validateEmail(forgotPassState.email)) {
      setStatusAction({
        isLoading: false,
        message: 'Your email incorrect format',
        success: false
      })(dispatch);
      return false;
    }
    return true;
  }

  const value = {
    forgotPassState,
    setEmail,
    submit
  }

  return (
    <ForgotPasswordContext.Provider value={value}>
      {props.children}
    </ForgotPasswordContext.Provider>
  )
}

export default ForgotPasswordProvider;