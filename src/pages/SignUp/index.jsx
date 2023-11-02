/**
 [ ] Migra parte do código para faz para criar para dentro do um hook
 */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { api } from "../../services/api";

import { Container, Form, Background } from "./styles";

import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    const dataUser = {
      name,
      email,
      password,
    };

    api
      .post("/users/create", dataUser)
      .then((response) => {
        console.log(response.data);
        alert("Usuário cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao cadastrar usuário, tente novamente mais tarde");
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <InputText
          placeholder="Nome"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <InputText
          placeholder="E-mail"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          placeholder="password"
          icon={FiLock}
          isPassword
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title={"Cadastrar"} onClick={handleSignUp} />

        <Link to={"/"}>
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
