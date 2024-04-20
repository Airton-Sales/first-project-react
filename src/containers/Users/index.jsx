import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";
import axios from "axios";

import { Container, Imagem, ContainerItens, H1, Button, User } from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3000/users");
      setUsers(newUsers);
    }

    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3000/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Imagem alt="logo-imagem" src={avatar} className="logo" />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="Lata de lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
          <img src={Arrow} alt="seta" />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
