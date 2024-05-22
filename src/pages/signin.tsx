import { StyledForm, FormWrapper } from "../styles/form";
import { CiUser, CiUnlock } from "react-icons/ci";
import Input from "../Components/Input";
import Title from "../Components/Title";
import Button from "../Components/Button";
import useForm from "../hooks/useForm";

const Signin = () => {
  const { errors, handleChange, handleSubmit } = useForm({
    username: "",
    password: "",
  });

  return (
    <FormWrapper>
      <StyledForm bgc="#969696" onSubmit={handleSubmit}>
        <Title level={3}>Member login</Title>
        <Input
          icon={CiUser}
          placeholder="username"
          type="text"
          name="username"
          onChange={handleChange}
          errorMessage={errors.username}
        />
        <Input
          icon={CiUnlock}
          placeholder="password"
          type="password"
          name="password"
          onChange={(e) => handleChange(e, 6)}
          errorMessage={errors.password}
        />
        <Button width="100%" variant="primary" type="submit">
          submit
        </Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default Signin;
