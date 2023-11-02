import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { Container, Content } from "./styles";

import { api } from "../../services/api";
import { useDebounce } from "../../hooks/debounceHook";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { BoxMovieDetail } from "../../components/BoxMovieDetail";

export function Home() {
  const navigate = useNavigate();
  const { debounce } = useDebounce(1000);

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  function handleAddMovie() {
    navigate("/create-movie");
  }

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("/movies/showAll");

      setMovies(response.data);
    }

    loadMovies();
  }, []);

  useEffect(() => {
    if (search === "") return;

    debounce(async () => {
      const response = await api.get(`/movies/index?title=${search}`);
      setMovies(response.data);
    });
  }, [search, debounce]);

  return (
    <Container>
      <Header value={search} onChange={(e) => setSearch(e.target.value)} />
      <Content>
        <div>
          <h1>Meus filmes</h1>
          <Button
            title={"Adicionar filme"}
            icon={FiPlus}
            onClick={handleAddMovie}
          />
        </div>
        <section>
          {movies &&
            movies.map((movie, index) => (
              <BoxMovieDetail
                key={index}
                title={movie.title}
                rate={movie.rating}
                description={movie.description}
                tags={movie.tags}
                onClick={() => navigate(`/movie/${movie.id}`)}
              />
            ))}
        </section>
      </Content>
    </Container>
  );
}
