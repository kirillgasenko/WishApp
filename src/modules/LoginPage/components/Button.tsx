import React from "react";
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string,
  isDisabled?: boolean,
}

function checkForDisabled(props: any) {
  return props.disabled || props.disabled === undefined;
}

const StyledButton = styled.button`
  border-radius: 50px;
  border: 0px;
  opacity: ${props => checkForDisabled(props) ? 0.5 : false};
  padding: 18px 21px;
  line-height: 18px;
  font-size: 14px;
  background-color: ${props => checkForDisabled(props) ? '#F7F7F7' : '#2FF0C2'};
  color: #313C3E;
  text-align: center;
  :hover {
    cursor: ${props => checkForDisabled(props) ? 'default' : 'pointer'};
  }
  :active {
    background-color: #F2FAF9;
  }
`;

const ButtonLogo = styled.img`
  height: 19px;
  width: 17px;
  margin-right: 12px;
`;

export function Button({icon, isDisabled, children, onClick, ...props}: ButtonProps) {
  return(
    <StyledButton type="button" disabled={isDisabled} onClick={!isDisabled ? onClick : undefined} {...props}>
      {icon && <ButtonLogo src={icon} alt="logo"/>}
      {children}
    </StyledButton>
  );
}
