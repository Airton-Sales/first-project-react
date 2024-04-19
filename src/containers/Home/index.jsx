import React, { useState, useRef } from "react";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";
import axios from "axios";

import {
  Container,
  Imagem,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3000/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    console.log(newUser);

    setUsers([newUser, ...users]);
    if (inputName.current.value && inputAge.current.value) {
      inputName.current.value = "";
      inputAge.current.value = "";
    }
  }

  return (
    <Container>
      <Imagem alt="logo-imagem" src={People} className="logo" />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img src={Arrow} alt="seta" />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
