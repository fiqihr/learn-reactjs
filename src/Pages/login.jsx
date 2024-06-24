import FormLogin from "../components/Fragments/formlogin";
import AuthLayout from "../components/Layouts/authlayouts";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
