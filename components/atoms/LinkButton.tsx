import styled from "styled-components";
import { FC } from "react";

export type ButtonType = {
  clickEvent?: () => void;
  text: string;
};

export const LinkButton: FC<ButtonType> = ({ clickEvent, text }) => {
  return <BaseLinkButton onClick={clickEvent}>{text}</BaseLinkButton>;
};

const BaseLinkButton = styled.button`
  border: none;
  background-color: #fff;
  color: blue;
  font-size: 15px;
  padding: 10px 15px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
