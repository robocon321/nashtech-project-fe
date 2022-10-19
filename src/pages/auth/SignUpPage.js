import SignUp from "../../components/auth/SignUp";
import SignUpProvider from "../../contexts/providers/auth/SignUpProvider";

const SignUpPage = props => {
  return (
    <main>
      <SignUpProvider>
        <SignUp />
      </SignUpProvider>
    </main>
  )
}

export default SignUpPage;