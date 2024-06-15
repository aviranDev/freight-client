import { useState, useRef } from "react";
import { validate } from "../utils/validateFiled";
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const useForm = (initialState: Record<string, string>) => {
  const valuesRef = useRef(initialState);
  const lengthsRef = useRef<Record<string, number>>({});
  const [errors, setErrors] = useState(initialState);

  const handleChange = (e: InputChangeEvent, length: number = 2) => {
    const { name, value } = e.target;
    valuesRef.current[name] = value;
    lengthsRef.current[name] = length;
    setErrors((prev) => ({ ...prev, [name]: validate(name, value, length) }));
  };

  const validateBeforeSubmit = () => {
    let hasErrors = false;
    // Validate all fields
    for (const name in valuesRef.current) {
      const length = lengthsRef.current[name] || 2; // Get the length from state or default to 2
      const error = validate(name, valuesRef.current[name], length);
      if (error) {
        setErrors((prev) => ({ ...prev, [name]: error }));
        hasErrors = true;
      }
    }

    if (hasErrors) return; // Stop submission if any field has errors
  };

  return { errors, handleChange, validateBeforeSubmit };
};

export default useForm;
