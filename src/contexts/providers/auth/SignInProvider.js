import { createContext, useReducer, useEffect, useContext } from "react";
import SignInReducer from '../../reducers/auth/SignInReducer';
import { changeFieldAction, signInAction } from "../../actions/auth/SignInAction";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppProvider";


export const SignInContext = createContext();

const initState = {
  username: '',
  password: '',
  user: {},
  status: {
    isLoading: true,
    message: '',
    success: false
  }
}

const SignInProvider = (props) => {
  const [signInState, dispatch] = useReducer(SignInReducer, initState);
  const { loadData } = useContext(AppContext);

  const navigation = useNavigate();

  useEffect(() => {
    if(signInState.user.id != null) {
      loadData();
      if(signInState.user.roleDTOs.filter(item => item.name === 'ADMIN').length === 1) {
        navigation("/admin/dashboard");
      } else {
        navigation("/");
      }
    }
  }, [signInState.user]);

  const changeField = (e) => {
    changeFieldAction(e.target.name, e.target.value)(dispatch);    
  }

  const signIn = (e) => {
    e.preventDefault();
    signInAction(signInState.username, signInState.password)(dispatch);    
  }

  const value = {
    signInState,
    changeField,
    signIn
  }
  
  return (
    <SignInContext.Provider value={value}>
      {props.children}
    </SignInContext.Provider>
  ) 
}

export default SignInProvider;