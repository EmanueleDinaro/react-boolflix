import { useDataContext } from "../context/AppDataContext";

export default function FilmCard() {
  const { films, setFilms } = useDataContext();

  return (
    <>
      <h2>Film</h2>
      <ul>
        {films.map((film) => (
          <li key={film.id} className="film-card">
            <img
              className="film-image"
              src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`}
              alt={film.title}
            />
            <h3 className="film-title">{film.title}</h3>
            <h4 className="film-original-title">
              Titolo originale: {film.original_title}
            </h4>
            <div className="language">
              <h4>Lingua: </h4>

              <img
                className="film-language"
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                  film.original_language === "en"
                    ? "GB"
                    : film.original_language === "ko"
                    ? "KR"
                    : film.original_language === "zh"
                    ? "CN"
                    : film.original_language === "ja"
                    ? "JP"
                    : film.original_language.toUpperCase()
                }.svg`}
                alt={film.original_language}
              />
            </div>
            <h4 className="film-vote">Voto: {film.vote_average}</h4>
          </li>
        ))}
      </ul>
    </>
  );
}
