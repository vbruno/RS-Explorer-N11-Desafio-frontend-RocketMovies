import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

import { useAuth } from "../../hooks/authHook";

import { Container, Form, Background } from "./styles";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    if (!email || !password) {
      return alert("Preencha todos os campos");
    }

    const dataUser = {
      email,
      password,
    };

    signIn(dataUser);
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

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

        <Button title={"Entrar"} onClick={handleSignIn} />

        <Link to={"/register"}>Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
