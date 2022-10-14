import React, { useContext } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { ResearchContext } from "./context/ResearchContext";
import Result from "./components/Result";
import { Pagination } from "antd";
import QueueAnim from "rc-queue-anim";

const App: () => JSX.Element = () => {
  const {
    researchResult,
    nbHits,
    pageNumber,
    setPageNumber,
    show,
    refreshedResult,
  } = useContext(ResearchContext);
  return (
    <div>
      <QueueAnim duration={3000}>
        {show
          ? [
              <div key="searchbar">
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
              </div>,
              <div key="results">
                <QueueAnim duration={3000}>
                  {refreshedResult
                    ? [
                        ...researchResult.map((item, index) => (
                          <div key={`result${index}`}>
                            <Result key={index} {...item} />
                          </div>
                        )),
                      ]
                    : null}
                </QueueAnim>
              </div>,
            ]
          : null}
      </QueueAnim>
    </div>
  );
};

export default App;
