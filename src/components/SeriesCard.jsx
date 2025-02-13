import { useDataContext } from "../context/AppDataContext";
import StarsVote from "./VoteStars";
import "./cards.css";

export default function SeriesCard() {
  const { series, setSeries } = useDataContext();

  return (
    <>
      <ul>
        {series.map((series) => (
          <li key={series.id} className="show-card">
            <img
              className="show-image"
              src={`https://image.tmdb.org/t/p/w342/${series.poster_path}`}
              alt={series.name}
            />
            <h3 className="show-title">{series.name}</h3>
            <h4 className="show-original-title">
              Titolo originale: {series.original_name}
            </h4>
            <div className="language">
              <h4>Lingua: </h4>

              <img
                className="show-language"
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                  series.original_language === "en"
                    ? "GB"
                    : series.original_language === "ko"
                    ? "KR"
                    : series.original_language === "zh"
                    ? "CN"
                    : series.original_language === "ja"
                    ? "JP"
                    : series.original_language.toUpperCase()
                }.svg`}
                alt={series.original_language}
              />
            </div>
            <div className="show-vote">
              <h4 id="number-vote">Voto TMDB: {series.vote_average}</h4>
              <span>|</span>
              <StarsVote vote={series.vote_average} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
