import { useState, useEffect } from "react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Container, Content, Form, Bookmarks, Action } from "./style";

import { Header } from "../../components/Header";
import { InputText } from "../../components/InputText";
import { InputTextarea } from "../../components/InputTextarea";
import { Marker } from "../../components/Marker";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

export function CreateMovie() {
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    if (!newTag) return;
    if (tags.includes(newTag)) return;

    setTags([...tags, newTag]);
    setNewTag("");
  }

  function handleDeleteTag(tag) {
    const newTags = tags.filter((item) => item !== tag);
    setTags(newTags);
  }

  async function handleCreateMovie() {
    const movie = {
      title,
      rating,
      description,
      tags,
    };

    try {
      const response = await api.post("/movies/create", movie);

      if (response.data) {
        alert("Filme criado com sucesso");
        navigate("/home");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao logar usuário, tente novamente mais tarde");
      }
    }
  }

  async function handleUpdateMovie() {
    if (!window.confirm("Deseja realmente atualizar este filme?")) return;

    const movieUpdate = {
      title,
      rating,
      description,
      tags,
    };

    try {
      const id = pathname.split("/")[3];
      const response = await api.put(`/movies/${id}`, movieUpdate);

      if (response.data) {
        alert("Filme atualizado com sucesso!");
        navigate(-1);
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao atualizar o filme, tente novamente mais tarde");
      }
    }
  }

  async function handleDeleteMovie() {
    if (!window.confirm("Deseja realmente excluir este filme?")) return;
    try {
      const id = pathname.split("/")[3];
      const response = await api.delete(`/movies/${id}`);

      if (response.data) {
        alert("Filme deletado com sucesso!");
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao deletar o filme, tente novamente mais tarde");
      }
    }
  }

  useEffect(() => {
    if (pathname === "/create-movie") return;

    async function loadMovie() {
      const id = pathname.split("/")[3];
      const response = await api.get(`/movies/show/${id}`);

      setTags(response.data.tags.map((tag) => tag.name));

      setTitle(response.data.title);
      setRating(response.data.rating);
      setDescription(response.data.description);
    }

    loadMovie();
  }, [pathname]);

  return (
    <Container>
      <Header />
      <Content>
        <button onClick={handleBack}>
          <FiArrowLeft />
          <span>Voltar</span>
        </button>
        <Form>
          <h1>
            {pathname === "/create-movie" ? "Novo Filme" : "Atualizar Filme"}
          </h1>
          <div>
            <InputText
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <InputText
              placeholder="Sua Nota (de 0 a 5)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <InputTextarea
            placeholder="Observações"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Bookmarks>
            <h1>Marcadores</h1>
            <div>
              {tags &&
                tags.map((tag, index) => (
                  <Marker
                    key={index}
                    value={tag}
                    onClick={() => handleDeleteTag(tag)}
                  />
                ))}
              <Marker
                isNew
                onClick={handleAddTag}
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
            </div>
          </Bookmarks>
          <Action>
            {pathname.split("/")[2] === "edit" && (
              <Button
                title={"Excluir filme"}
                variant
                onClick={handleDeleteMovie}
              />
            )}

            {pathname === "/create-movie" ? (
              <Button title={"Salvar"} onClick={handleCreateMovie} />
            ) : (
              <Button title={"Salvar alterações"} onClick={handleUpdateMovie} />
            )}
          </Action>
        </Form>
      </Content>
    </Container>
  );
}
