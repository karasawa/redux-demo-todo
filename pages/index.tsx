import type { NextPage } from "next";
import { Button } from "../components/atoms/Button";
import { Dialog } from "../components/organisms/Dialog";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { openDialog } from "../features/dialog/dialogSlice";
import { TodoCard } from "../components/organisms/TodoCard";
import styled from "styled-components";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { content, count } = useSelector((state: RootState) => state.todo);
  return (
    <MainContainer>
      <SubContainer>
        <Button clickEvent={() => dispatch(openDialog())} text="todoを追加" />
        <h3>todo一覧　（現在{count}個）</h3>
        {content.map((item, index) => {
          return <TodoCard key={item} item={item} index={index} />;
        })}
        <Dialog />
      </SubContainer>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
