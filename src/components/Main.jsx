import { useFilmDataContext } from "../context/AppDataContext";

export default function Main() {
  const { films, setFilms } = useFilmDataContext();

  return (
    <main>
      <ul>
        {films.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </main>
  );
}
