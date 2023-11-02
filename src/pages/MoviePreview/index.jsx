import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiClock, FiEdit } from "react-icons/fi";
import {
  Container,
  Content,
  MovieTitle,
  MovieAuthor,
  MovieTags,
  MovieDescription,
} from "./styles";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { StarRate } from "../../components/StarRate";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function MoviePreview() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [tags, setTags] = useState([]);
  const avatarUrl = movie.user_avatar
    ? `${api.defaults.baseURL}/files/${movie.user_avatar}`
    : avatarPlaceholder;

  function handleEditMovie() {
    navigate(`/movie/edit/${id}`);
  }

  useEffect(() => {
    async function loadMovie() {
      const response = await api.get(`/movies/show/${id}`);

      setMovie(response.data);
      setTags(response.data.tags);
    }

    loadMovie();
  }, [id]);

  return (
    <Container>
      <Header />
      <Content>
        <Link to={"/"}>
          <FiArrowLeft />
          <span>Voltar</span>
        </Link>
        {movie && (
          <main>
            <MovieTitle>
              {movie.title}
              <StarRate value={movie.rating} />
              <button onClick={handleEditMovie}>
                <FiEdit />
              </button>
            </MovieTitle>
            <MovieAuthor>
              <img src={avatarUrl} alt="Foto do usuário" />
              <span>Por {movie.user_name}</span>
              <FiClock />
              <span>
                {dayjs(movie.update_at).format("DD/MM/YYYY [às] HH:mm")}
              </span>
            </MovieAuthor>
            <MovieTags>
              {tags && tags.map((tag) => <Tag key={tag.id}>{tag.name}</Tag>)}
            </MovieTags>
            <MovieDescription>{movie.description}</MovieDescription>
          </main>
        )}
      </Content>
    </Container>
  );
}
