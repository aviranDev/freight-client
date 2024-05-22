import styled from "styled-components";

export const FormWrapper = styled.div<{ height?: string }>`
  display: flex;
  height: ${({ height }) => (height ? height : "50vh")};
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form<{ bgc?: string }>`
  max-width: 450px;
  padding: 30px;
  background-color: ${({ bgc }) => bgc ?? "#fff"};
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  min-height: 300px;
`;
