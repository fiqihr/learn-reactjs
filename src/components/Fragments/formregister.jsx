import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        name="fullname"
        type="text"
        placeholder="Enter your name"
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <InputForm
        label="Confirm Password"
        name="Confirm password"
        type="password"
        placeholder="Confirm your password"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
