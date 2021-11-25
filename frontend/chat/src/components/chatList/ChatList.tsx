import { Container, DivCustom, DivList, User, MainDiv } from "./styles";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useState } from "react";
export function ChatList(props:any) {
  var allChatUsers = [
    {
      id: 1,
      name: "Tim Hover",
      isOnline: true,
    },
    {
      id: 2,
      name: "Ayub Rossi",
      isOnline: false,
    },
    {
      id: 3,
      name: "Hamaad Dejesus",
      isOnline: false,
    },
    {
      id: 4,
      name: "Eleni Hobbs",
      isOnline: true,
    },
    {
      id: 5,
      name: "Elsa Black",
      isOnline: false,
    },
    {
      id: 6,
      name: "Kayley Mellor",
      isOnline: true,
    },
    {
      id: 7,
      name: "Hasan Mcculloch",
      isOnline: true,
    },
    {
      id: 8,
      name: "Autumn Mckee",
      isOnline: false,
    },
    {
      id: 9,
      name: "Allen Woodley",
      isOnline: true,
    },
    {
      id: 10,
      name: "Manpreet David",
      isOnline: true,
    },
  ];
  const [open, setOpen] = useState<boolean>(false);
  const  handleClose= ()=>{setOpen(false)};
  const handleOpen=()=>{setOpen(true)};
  const [inputModal, setInputModal] = useState<string>("");

  const style: any = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    heigth: 250,
    bgcolor: "#DCDCDC",
    boxShadow: 24,
    p: 4,
  };


  return (
    <Container>
      <Button
        variant="text"
        startIcon={<AddCircleIcon />}
        onClick={handleOpen}
        style={{
          backgroundColor: "#6A5ACD",
          width: "90%",
          marginLeft: "5%",
          marginTop: "10px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Adicionar contato
      </Button>

      <Button
        variant="text"
        startIcon={<AddCircleIcon />}
        onClick={handleOpen}
        style={{
          backgroundColor: "#6A5ACD",
          width: "90%",
          marginLeft: "5%",
          marginTop: "10px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Adicionar Grupo
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Digite o id do usuário
          </Typography>
          <DivCustom>
            <TextField
              id="outlined-basic"
              label="Id user"
              variant="outlined"
              value={inputModal}
              onChange={(event) => setInputModal(event.target.value)}
              style={{ width: "100%" }}
            />
            <Button variant="contained" style={{ marginLeft: "20px" }}>Ok</Button>
          </DivCustom>
        </Box>
      </Modal>
      <DivList>
        {allChatUsers.map(user => {
          return (
            <MainDiv onClick={()=>{props.set(user)}} style={{}}>
              <User>
                {user.name}
              </User>
            </MainDiv>)
        })}
      </DivList>
    </Container>
  );
}
