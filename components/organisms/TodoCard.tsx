import { FC } from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../features/todo/todoSlice";

export type Props = {
  item: string;
  index: number;
};

export const TodoCard: FC<Props> = ({ item, index }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {item}
      <Button text="削除" clickEvent={() => dispatch(deleteTodo(index))} />
    </List>
  );
};

const List = styled.li`
  width: 100%;
  font-size: 17px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;
