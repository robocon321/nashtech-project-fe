import ForgotPassword from "../../components/auth/ForgotPassword";
import ForgotPasswordProvider from "../../contexts/providers/auth/ForgotPasswordProvider";

const ForgotPasswordPage = props => {
  return (
    <main>
      <ForgotPasswordProvider>
        <ForgotPassword />
      </ForgotPasswordProvider>
    </main>
  )
}

export default ForgotPasswordPage;