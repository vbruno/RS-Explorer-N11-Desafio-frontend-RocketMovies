import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";

import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/authHook";

export function Profile() {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  function handleBack() {
    navigate(-1);
  }

  async function handleUpdateProfile(e) {
    e.preventDefault();

    const updated = {
      name,
      email,
      password: newPassword,
      oldPassword,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <button onClick={handleBack}>
          <FiArrowLeft />
          <span>Voltar</span>
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <InputText
          placeholder="Nome"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputText
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          placeholder="Senha atual"
          isPassword
          icon={FiLock}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <InputText
          placeholder="Nova senha"
          isPassword
          icon={FiLock}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button title={"Salvar"} onClick={handleUpdateProfile} />
      </Form>
    </Container>
  );
}
