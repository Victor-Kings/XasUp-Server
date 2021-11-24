import { Container, DivCustom } from "./styles";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useState } from "react";
export function ChatList() {
  /* var allChatUsers = [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        id: 1,
        name: "Tim Hover",
        active: true,
        isOnline: true,
      },
      {
        image:
          "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
        id: 2,
        name: "Ayub Rossi",
        active: false,
        isOnline: false,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
        id: 3,
        name: "Hamaad Dejesus",
        active: false,
        isOnline: false,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
        id: 4,
        name: "Eleni Hobbs",
        active: false,
        isOnline: true,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
        id: 5,
        name: "Elsa Black",
        active: false,
        isOnline: false,
      },
      {
        image:
          "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
        id: 6,
        name: "Kayley Mellor",
        active: false,
        isOnline: true,
      },
      {
        image:
          "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
        id: 7,
        name: "Hasan Mcculloch",
        active: false,
        isOnline: true,
      },
      {
        image:
          "https://auraqatar.com/projects/Anakalabel/media//vesbrand/designer4.jpg",
        id: 8,
        name: "Autumn Mckee",
        active: false,
        isOnline: false,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
        id: 9,
        name: "Allen Woodley",
        active: false,
        isOnline: true,
      },
      {
        image: "https://pbs.twimg.com/profile_images/770394499/female.png",
        id: 10,
        name: "Manpreet David",
        active: false,
        isOnline: true,
      },
    ];*/
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      {inputModal}
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
              style={{width: "100%"}}
            />
            <Button variant="contained" style={{marginLeft:"20px"}}>Ok</Button>
          </DivCustom>
        </Box>
      </Modal>
    </Container>
  );
}
