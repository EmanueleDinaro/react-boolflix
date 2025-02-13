import { useState } from "react";
import { DataProvider } from "./context/AppDataContext";

//components
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <DataProvider>
      <Header></Header>
      <Main></Main>
    </DataProvider>
  );
}

export default App;
