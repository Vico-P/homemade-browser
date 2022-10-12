import React, { useContext } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { ResearchContext } from "./context/ResearchContext";
import Result from "./components/Result";
import { Pagination } from "antd";

const App: () => JSX.Element = () => {
  const { researchResult, nbHits, pageNumber, setPageNumber } =
    useContext(ResearchContext);
  return (
    <div>
      <SearchBar />
      {nbHits > 0 && (
        <Pagination
          onChange={(page) => {
            setPageNumber(page);
          }}
          current={pageNumber}
          total={nbHits}
          showLessItems={true}
          showSizeChanger={false}
        />
      )}
      {researchResult.map((item, index) => (
        <Result key={index} {...item} />
      ))}
    </div>
  );
};

export default App;
