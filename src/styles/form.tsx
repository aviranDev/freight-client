import styled from "styled-components";

interface StyledFormProps {
  $bgc?: string;
}

export const FormWrapper = styled.div<{ height?: string }>`
  display: flex;
  height: ${({ height }) => (height ? height : "50vh")};
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form<StyledFormProps>`
  max-width: 600px; /* Adjust the max-width as needed */
  padding: 40px; /* Adjust the padding as needed */
  background-color: ${({ $bgc }) => $bgc ?? "#fff"};
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  height: 325px;
`;

export const MessageContainer = styled.div<{ $apiMod: boolean }>`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  margin-top: 10px;
  color: ${({ $apiMod }) => ($apiMod ? "#000" : " #800000")};
`;
