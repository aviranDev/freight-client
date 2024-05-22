export const validate = (name: string, value: string, length: number) => {
  let errorMessage: string = "";
  if (!value) {
    errorMessage = `${
      name.charAt(0).toUpperCase() + name.slice(1)
    } is required`;
  } else if (value.length < length) {
    errorMessage = `${
      name.charAt(0).toUpperCase() + name.slice(1)
    } min ${length} characters`;
  }
  return errorMessage;
};

export default validate;
