import React, { useContext } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { ResearchContext } from "./context/ResearchContext";
import Result from "./components/Result";

const App: () => JSX.Element = () => {
  const { researchResult } = useContext(ResearchContext);
  return (
    <div>
      <SearchBar />
      {researchResult.map((item, index) => (
        <Result key={index} {...item} />
      ))}
    </div>
  );
};

export default App;
