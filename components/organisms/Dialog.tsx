import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { closeDialog } from "../../features/dialog/dialogSlice";
import { addTodo } from "../../features/todo/todoSlice";
import { Button } from "../atoms/Button";
import { LinkButton } from "../atoms/LinkButton";
import { Form } from "../atoms/Form";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export const Dialog = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.dialog);

  const [title, setTitle] = useState("");

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => {
          dispatch(closeDialog()), setTitle("");
        }}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            todoを追加しましょう！
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              m: "25px",
            }}
          >
            <Form placeHolder="タイトル" changeEvent={setTitle} value={title} />
            <Button
              clickEvent={() => {
                dispatch(addTodo(title)), setTitle("");
              }}
              text="追加"
            />
          </Box>
          <LinkButton
            clickEvent={() => {
              dispatch(closeDialog()), setTitle("");
            }}
            text="閉じる"
          />
        </Box>
      </Modal>
    </div>
  );
};
