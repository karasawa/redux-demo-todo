import styled from "styled-components";
import { Dispatch, FC, SetStateAction } from "react";

export type BaseInput = {
  placeHolder: string;
  changeEvent: Dispatch<SetStateAction<string>>;
  value: string;
};

export const Form: FC<BaseInput> = ({ placeHolder, changeEvent, value }) => {
  return (
    <BaseInput
      placeholder={placeHolder}
      value={value}
      onChange={(e) => changeEvent(e.target.value)}
    />
  );
};

const BaseInput = styled.input`
  padding: 10px;
  border-radius: 10px;
`;
