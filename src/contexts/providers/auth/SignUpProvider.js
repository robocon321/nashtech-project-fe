import { createContext, useEffect, useReducer } from "react";
import SignUpReducer from '../../reducers/auth/SignUpReducer';
import { changeFieldAction, setStatusAction, signUpAction } from "../../actions/auth/SignUpAction";
import { validateEmail, validateFullname, validatePhone } from "../../../utils/validate";
import { useNavigate } from "react-router-dom";


export const SignUpContext = createContext();

const initState = {
  user: {
    username: '',
    fullname: '',
    email: '',
    phone: '',
    password: '',
    retype_password: ''  
  }, 
  status: {
    isLoading: true,
    message: '',
    success: true
  }
}

const SignUpProvider = (props) => {
  const [signUpState, dispatch] = useReducer(SignUpReducer, initState);
  const navigation = useNavigate();

  useEffect(() => {
    if(!signUpState.status.isLoading && signUpState.status.success) {
      navigation("/sign-in");
    }
  }, [signUpState.status]);

  const changeField = (e) => {
    changeFieldAction(e.target.name, e.target.value)(dispatch);
  }

  const signUp = (e) => {
    e.preventDefault();
    if(validateForm()) {
      signUpAction(signUpState.user)(dispatch);
    }
  }

  const validateForm = () => {
    if(signUpState.user.username.length < 6) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: 'Username not less 6 letters'
      })(dispatch);
      return false;
    }

    if(!validateFullname(signUpState.user.fullname)) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: 'Incorrect fullname format'
      })(dispatch);
      return false;
    }
    
    if(!validateEmail(signUpState.user.email)) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: 'Incorrect email format'
      })(dispatch);
      return false;
    }
    
    if(!validatePhone(signUpState.user.phone)) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: 'Incorrect phone format'
      })(dispatch);
      return false;
    }

    if(signUpState.user.password.length < 6) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: 'Password not less 6 letters'
      })(dispatch);
      return false;
    }

    if(signUpState.user.password !== signUpState.user.retype_password) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: 'Password not match with Retype password'
      })(dispatch);
      return false;
    }

    return true;
  }

  const value = {
    signUpState,
    changeField,
    signUp
  }
  
  return (
    <SignUpContext.Provider value={value}>
      {props.children}
    </SignUpContext.Provider>
  ) 
}

export default SignUpProvider;