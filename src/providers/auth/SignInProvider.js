import { loadAccountAction } from "@contexts/actions/AppAction";
import { changeFieldAction, signInAction } from "@contexts/actions/auth/SignInAction";
import { AppContext } from "@providers/AppProvider";
import { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const SignInContext = createContext();

const SignInProvider = (props) => {
  const dispatch = useDispatch();
  const signInState = useSelector((state) => state.signInReducer);

  const navigation = useNavigate();

  useEffect(() => {
    loadData();
  }, [signInState.user]);

  const loadData = () => {
    if(signInState.user.id != null) {
      loadAccountAction()(dispatch);
      if(signInState.user.roles.filter(item => item.name === 'ADMIN').length === 1) {
        navigation("/admin/dashboard");
      } else {
        navigation("/");
      }
    }
  }

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