import FormRegister from "../components/Fragments/formregister";
import AuthLayout from "../components/Layouts/authlayouts";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
