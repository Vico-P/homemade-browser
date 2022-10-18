import React, { useContext, useState, useEffect } from "react";
import GET_SEARCH_RESULT from "../../gql_query/GET_SEARCH_RESULT";
import { useQuery } from "@apollo/client";
import { ResearchContext } from "../../context/ResearchContext";
import { DisplayMode, GoogleItems, SearchType } from "../../types/types";
import { Input, Space } from "antd";
import GET_IMAGE_RESULT from "../../gql_query/GET_IMAGE_RESULT";

const SearchBar: () => JSX.Element = () => {
  const [valueInput, setValueInput] = useState<string>("");
  const [textToSearch, setTextToSearch] = useState<string>("");
  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    DisplayMode.CENTER
  );
  const {
    setResearchResult,
    pageNumber,
    setNbHits,
    setShow,
    setRefreshedResult,
    setPageNumber,
    setLaunchedResearchOnce,
    searchType,
  } = useContext(ResearchContext);
  const { loading, data } = useQuery<{
    search: {
      nbHits: number;
      results: GoogleItems[];
    };
  }>(searchType === SearchType.IMAGE ? GET_IMAGE_RESULT : GET_SEARCH_RESULT, {
    variables: {
      textToSearch,
      pageNumber,
      searchType,
    },
    skip: !textToSearch,
  });

  useEffect(() => {
    if (textToSearch) {
      setShow(false);
    }
  }, [textToSearch]);

  useEffect(() => {
    setRefreshedResult(false);
  }, [pageNumber]);

  useEffect(() => {
    if (!loading && data) {
      setResearchResult(data.search.results);
      setNbHits(data.search.nbHits);
      // We put a setTimeout to let the animation the time to play
      setTimeout(() => setShow(true), 1000);
      setTimeout(() => setRefreshedResult(true), 1000);
      setTimeout(() => setDisplayMode(DisplayMode.HEADBAND), 1000);
    }
  }, [data]);

  const launchSearch: () => void = () => {
    setTextToSearch(valueInput);
    setPageNumber(1);
    setLaunchedResearchOnce(true);
  };

  if (displayMode === DisplayMode.CENTER) {
    return (
      <div className="d-flex flex-column col-12 align-items-center h-100 center-search-bar">
        <div className="col-4 d-flex justify-content-center mb-2">
          <Space direction="vertical">
            <img src="/icon192.png" className="mb-2" />
            <label className="mb-2">Home made search engine</label>
          </Space>
        </div>
        <div className="col-6">
          <Input.Search
            size="large"
            value={valueInput}
            enterButton
            allowClear
            onChange={(event) => setValueInput(event.target.value)}
            onPressEnter={launchSearch}
            onSearch={launchSearch}
          ></Input.Search>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex col-12 headband-search-bar">
      <Space direction="horizontal" className="col-6">
        <img
          src="/icon192.png"
          style={{ marginLeft: 75, marginRight: 10, height: 32 }}
        />
        <div style={{ width: 650 }}>
          <Input.Search
            size="large"
            value={valueInput}
            enterButton
            allowClear
            onChange={(event) => setValueInput(event.target.value)}
            onSearch={launchSearch}
          ></Input.Search>
        </div>
      </Space>
    </div>
  );
};

export default React.memo(SearchBar);
