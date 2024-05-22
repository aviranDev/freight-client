import React from "react";
import styled from "styled-components";

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  children: React.ReactNode;
  className?: string;
}

const TitleStyles = styled.h1<TitleProps>`
  font-size: ${({ level }) => {
    switch (level) {
      case 1:
        return "2em";
      case 2:
        return "1.75em";
      case 3:
        return "1.5em";
      case 4:
        return "1.25em";
      case 5:
        return "1em";
      case 6:
        return "0.875em";
      default:
        return "2em";
    }
  }};
  margin: 0.5em;
  color: ${({ color }) => color ?? "#000"};
`;

const Title: React.FC<TitleProps> = ({ level = 1, children, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <TitleStyles as={Tag} level={level} className={className}>
      {children}
    </TitleStyles>
  );
};

export default Title;
