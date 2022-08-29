import styled from "styled-components";
import { FC } from "react";

export type ButtonType = {
  clickEvent?: () => void;
  text: string;
};

export const Button: FC<ButtonType> = ({ clickEvent, text }) => {
  return <BaseButton onClick={clickEvent}>{text}</BaseButton>;
};

const BaseButton = styled.button`
  border: none;
  background-color: #892f1b;
  color: #fff;
  font-size: 15px;
  padding: 10px 15px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
