import { useDataContext } from "../context/AppDataContext";
import StarsVote from "./VoteStars";
import "./cards.css";

export default function FilmCard() {
  const { films, setFilms } = useDataContext();

  return (
    <>
      <ul>
        {films.map((film) => (
          <li key={film.id} className="show-card">
            <img
              className="show-image"
              src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`}
              alt={film.title}
            />
            <h3 className="show-title">{film.title}</h3>
            <h4 className="show-original-title">
              Titolo originale: {film.original_title}
            </h4>
            <div className="language">
              <h4>Lingua: </h4>

              <img
                className="show-language"
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
            <div className="show-vote">
              <h4 id="number-vote">Voto TMDB: {film.vote_average}</h4>
              <span>|</span>
              <StarsVote vote={film.vote_average} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
