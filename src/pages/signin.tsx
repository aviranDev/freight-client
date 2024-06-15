import { useState, useRef } from "react";
import { StyledForm, FormWrapper, MessageContainer } from "../styles/form";
import { CiUser, CiUnlock } from "react-icons/ci";
import Input from "../Components/Input";
import Title from "../Components/Title";
import Button from "../Components/Button";
import validate from "../utils/validateFiled";
import { Auth } from "../services/user";
import useLogin from "../hooks/useLogin";

const initialState: Auth = {
  username: "",
  password: "",
};

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const Signin = () => {
  const valuesRef = useRef<Auth>(initialState);
  const lengthsRef = useRef<Record<string, number>>({});
  const [errors, setErrors] = useState<Auth>(initialState);
  const [apiMessage, setApiMessage] = useState<string>("");
  const [$apiMod, set$ApiMod] = useState<boolean>(false);
  const { login, logout } = useLogin();
  const handleChange = (e: InputChangeEvent, length: number = 2) => {
    const { name, value } = e.target;
    valuesRef.current[name as keyof Auth] = value;
    lengthsRef.current[name] = length;
    setErrors((prev) => ({ ...prev, [name]: validate(name, value, length) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasErrors = false;

    // Validate all fields
    for (const name in valuesRef.current) {
      const length = lengthsRef.current[name] || 2; // Get the length from state or default to 2
      const error = validate(
        name,
        valuesRef.current[name as keyof Auth],
        length,
      );
      if (error) {
        setErrors((prev) => ({ ...prev, [name]: error }));
        hasErrors = true;
      }
    }

    if (hasErrors) return; // Stop submission if any field has errors

    try {
      const response = await login(valuesRef.current);
      set$ApiMod(true);
      setApiMessage(response.data.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      set$ApiMod(false);

      console.log(error.response?.data?.error.message);

      setApiMessage(error.response?.data?.error.message);
    }
  };

  return (
    <FormWrapper>
      <StyledForm $bgc="#969696" onSubmit={handleSubmit}>
        <Title $level={3}>Member login</Title>
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
        <Button width="100%" $variant="primary" type="submit">
          submit
        </Button>
        <MessageContainer $apiMod={$apiMod}>
          {apiMessage && <span>{apiMessage}</span>}
        </MessageContainer>
      </StyledForm>
      <button onClick={logout}>logout</button>
    </FormWrapper>
  );
};

export default Signin;
