import type { NextPage } from "next";
import { Button } from "../components/atoms/Button";
import { Dialog } from "../components/organisms/Dialog";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { openDialog } from "../features/dialog/dialogSlice";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.dialog);
  return (
    <div className={styles.container}>
      <Button clickEvent={() => dispatch(openDialog())} text="todoを追加" />
      <Dialog />
    </div>
  );
};

export default Home;
