import React from "react";
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string,
}

const StyledButton = styled.button`
  border-radius: 50px;
  border: 0px;
  opacity: 0.5;
  padding: 18px 21px;
  line-height: 18px;
  font-size: 14px;
  background-color: #F7F7F7;
  color: #313C3E;
  text-align: center;
`;

const ButtonLogo = styled.img`
  height: 19px;
  width: 17px;
  margin-right: 12px;
`;

export function Button({icon, children, ...props}: ButtonProps) {
  return(
    <StyledButton type="button" {...props}>
      {icon && <ButtonLogo src={icon} alt="logo"/>}
      {children}
    </StyledButton>
  );
}
