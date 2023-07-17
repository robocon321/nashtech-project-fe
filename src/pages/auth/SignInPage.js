import SignIn from "@components/auth/SignIn";
import SignInProvider from '@providers/auth/SignInProvider';

const SignInPage = props => {
  return (
    <main>
      <SignInProvider>
        <SignIn />
      </SignInProvider>
    </main>
  )
}

export default SignInPage;