import { useDataContext } from "../context/AppDataContext";

export default function SeriesCard() {
  const { series, setSeries } = useDataContext();

  return (
    <>
      <h2>Serie TV</h2>
      <ul>
        {series.map((series) => (
          <li key={series.id} className="film-card">
            <img
              className="film-image"
              src={`https://image.tmdb.org/t/p/w342/${series.poster_path}`}
              alt={series.name}
            />
            <h3 className="film-title">{series.name}</h3>
            <h4 className="film-original-title">
              Titolo originale: {series.original_name}
            </h4>
            <div className="language">
              <h4>Lingua: </h4>

              <img
                className="film-language"
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
            <h4 className="film-vote">Voto: {series.vote_average}</h4>
          </li>
        ))}
      </ul>
    </>
  );
}
