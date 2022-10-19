import { useContext } from 'react';
import { Alert } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './Auth.module.css';
import { SignInContext } from '../../contexts/providers/auth/SignInProvider';
import Loading from '../common/Loading';

const SignIn = (props) => {
	const { signInState, changeField, signIn } = useContext(SignInContext);
	if(signInState.status.isLoading) {
		return <Loading />
	} else {
		return (
			<div className={styles["limiter"]}>
				<div className={styles["container-login100"]}>
					<div className={styles["wrap-login100"] + " " +styles["p-l-110"] + " " + styles["p-r-110"] + " " + styles["p-t-62"]  + " " +  styles["p-b-33"]}>
						<form className={styles["login100-form"] + " " +styles["validate-form"] + " " +styles["flex-sb"] + " " +styles["flex-w"]}>
							<span className={styles["login100-form-title"] + " " +styles["p-b-53"]}>
								Sign In With
							</span>
							<div className='alert'>
								{
									signInState.status.message && !signInState.status.success && <Alert severity="warning">{signInState.status.message}</Alert>
								}
								
							</div>
		
							<Link to="#" className={styles["btn-face"] + " " +styles["m-b-20"]}>
								Facebook
							</Link>
		
							<Link to="#" className={styles["btn-google"] + " " +styles["m-b-20"]}>
								<img src="images/icons/icon-google.png" alt="GOOGLE" />
								Google
							</Link>
							<div className={styles["p-t-31"] + " " +styles["p-b-9"]}>
								<span className={styles["txt1"]}>
									Username
								</span>
							</div>
							<div className={styles["wrap-input100"] + " " +styles["validate-input"]} data-validate = "Username is required">
								<input className={styles["input100"]} type="text" name="username" onChange={changeField} />
								<span className={styles["focus-input100"]}></span>
							</div>
							
							<div className={styles["p-t-13"] + " " +styles["p-b-9"]}>
								<span className={styles["txt1"]}>
									Password
								</span>
								<span> </span>
								<Link to="#" className={styles["txt2"] + " " +styles["bo1"] + " " +styles["m-l-5"] + " " + styles["pink-hover"]}>
									Forgot?
								</Link>
							</div>
							<div className={styles["wrap-input100"] + " " +styles["validate-input"]} data-validate = "Password is required">
								<input className={styles["input100"]} type="password" name="password"  onChange={changeField}/>
								<span className={styles["focus-input100"]}></span>
							</div>
		
							<div className={styles["container-login100-form-btn"] + " " +styles["m-t-17"]}>
								<button className={styles["login100-form-btn"]} onClick={signIn}>
									Sign In
								</button>
							</div>
		
							<div className={styles["w-full"] + " " +styles["text-center"] + " " +styles["p-t-55"]}>
								<span className={styles["txt2"]}>
									Not a member?
								</span>
								<span> </span>
								<Link to="/sign-up" className={styles["txt2"] + " " +styles["bo1"] + " " + styles["pink-hover"]}>
									Sign up now
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>  
			)
		
	}

}

export default SignIn;