import React, { useState, useRef } from "react";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

import {
  Container,
  Imagem,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  function addNewUser() {
    setUsers([
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value,
      },
      ...users,
    ]);
    if (inputName.current.value && inputAge.current.value) {
      inputName.current.value = "";
      inputAge.current.value = "";
    }
  }

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
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

        <ul>
          {users.map((users) => (
            <User key={users.id}>
              <p>{users.name} </p>
              <p>{users.age}</p>
              <button onClick={() => deleteUser(users.id)}>
                <img src={Trash} alt="Lata de lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
