import { createContext, useContext, useState } from "react";

// Creo un nuovo context chiamato dataContext.
// Il context è un meccanismo che permette di condividere dati e funzioni tra componenti senza doverli passare manualmente come props ad ogni livello.
const dataContext = createContext();

// Definisco una funzione chiamata dataProvider
// dataProvider accetta un singolo parametro children.
// children rappresenta i componenti React.
function DataProvider({ children }) {
  // Definisco lo stato per l'elenco dei film.
  const [films, setFilms] = useState([]);
  const [series, setSeries] = useState([]);

  return (
    // Creo un componente Provider per il context dataContext
    // Fornisco i valori films e setFilms a dataContext.
    // Questo significa che tutti i componenti React all'interno del Provider avranno accesso a questi dati
    <dataContext.Provider value={{ films, setFilms, series, setSeries }}>
      {children}
    </dataContext.Provider>
  );
}

// Definisco una funzione custom hook che mi permette di accedere ai dati del context dataContext in modo più pulito e riutilizzabile.
function useDataContext() {
  // useContext è un hook di React che permette di accedere al valore corrente di un context.
  return useContext(dataContext);
}

// Esporto i componenti e l'hook per utilizzarli in altri componenti
export { DataProvider, useDataContext };
