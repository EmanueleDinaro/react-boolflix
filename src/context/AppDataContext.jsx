import { createContext, useContext, useState } from "react";

// Creo un nuovo context chiamato FilmDataContext.
// Il context è un meccanismo che permette di condividere dati e funzioni tra componenti senza doverli passare manualmente come props ad ogni livello.
const FilmDataContext = createContext();

// Definisco una funzione chiamata FilmDataProvider
// FilmDataProvider accetta un singolo parametro children.
// children rappresenta i componenti React.
function FilmDataProvider({ children }) {
  // Definisco lo stato per l'elenco dei film.
  const [films, setFilms] = useState([]);

  return (
    // Creo un componente Provider per il context FilmDataContext
    // Fornisco i valori films e setFilms a FilmDataContext.
    // Questo significa che tutti i componenti React all'interno del Provider avranno accesso a questi dati
    <FilmDataContext.Provider value={{ films, setFilms }}>
      {children}
    </FilmDataContext.Provider>
  );
}

// Definisco una funzione custom hook che mi permette di accedere ai dati del context FilmDataContext in modo più pulito e riutilizzabile.
function useFilmDataContext() {
  // useContext è un hook di React che permette di accedere al valore corrente di un context.
  return useContext(FilmDataContext);
}

// Esporto i componenti e l'hook per utilizzarli in altri componenti
export { FilmDataProvider, useFilmDataContext };
