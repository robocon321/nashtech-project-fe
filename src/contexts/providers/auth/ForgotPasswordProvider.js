import React, {useReducer, createContext} from 'react';

import { setEmailAction, setLoadingAction, setStatusAction, submitAction } from '../../actions/auth/ForgotPasswordAction';
import ForgotPasswordReducer from '../../reducers/auth/ForgotPasswordReducer';
import { validateEmail } from '../../../utils/validate';
import { useEffect } from 'react';

export const ForgotPasswordContext = createContext();

const initState = {
  email: '',
  status: {
    isLoading: true,
    message: '',
    success: true
  }
}

const ForgotPasswordProvider = props => {
  const [ forgotPassState, dispatch ] = useReducer(ForgotPasswordReducer, initState);

  useEffect(() => {
    setLoadingAction(false)(dispatch);
  }, []);

  const setEmail = e => {
    setEmailAction(e.target.value)(dispatch);
  }

  const submit = async (e) => {
    e.preventDefault();
    if(validate()) {
      setLoadingAction(true)(dispatch);
      await submitAction(forgotPassState.email)(dispatch);
      setLoadingAction(false)(dispatch);  
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