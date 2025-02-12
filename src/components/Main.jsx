import { useFilmDataContext } from "../context/AppDataContext";

export default function Main() {
  const { films, setFilms } = useFilmDataContext();

  return (
    <main>
      <ul>
        {films.map((film) => (
          <li key={film.id} className="film-card">
            <img
              className="film-image"
              src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`}
              alt={film.title}
            />
            <h3 className="film-title">{film.title}</h3>
            <h4 className="film-original-title">{film.original_title}</h4>
            <h4 className="film-language">{film.original_language}</h4>
            <h4 className="film-vote">{film.vote_average}</h4>
          </li>
        ))}
      </ul>
      ;
    </main>
  );
}
