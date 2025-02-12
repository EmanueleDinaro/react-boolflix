import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "e99307154c6dfb0b4750f6603256716d",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setFilms(res.data.results));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        type="search"
        placeholder="Cerca..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Invio</button>
      <ul>
        {films.map((film) => {
          <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    </form>
  );
}
