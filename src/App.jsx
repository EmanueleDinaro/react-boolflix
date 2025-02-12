import { useState } from "react";
import { FilmDataProvider } from "./context/AppDataContext";

//components
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <FilmDataProvider>
      <Header></Header>
      <Main></Main>
    </FilmDataProvider>
  );
}

export default App;
