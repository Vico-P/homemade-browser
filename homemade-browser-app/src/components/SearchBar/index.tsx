import React, { useContext, useState, useEffect } from "react";
import GET_SEARCH_RESULT from "../../gql_query/GET_SEARCH_RESULT";
import { useQuery } from "@apollo/client";
import { ResearchContext } from "../../context/ResearchContext";
import { GoogleItems } from "../../types/types";

const SearchBar: () => JSX.Element = () => {
  const [valueInput, setValueInput] = useState<string>("");
  const [textToSearch, setTextToSearch] = useState<string>("");
  const {
    setResearchResult,
    pageNumber,
    setNbHits,
    setShow,
    setRefreshedResult,
    setPageNumber,
  } = useContext(ResearchContext);
  const { loading, data } = useQuery<{
    search: {
      nbHits: number;
      results: GoogleItems[];
    };
  }>(GET_SEARCH_RESULT, {
    variables: {
      textToSearch,
      pageNumber,
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
      setResearchResult(data.search.results ?? []);
      setNbHits(data?.search.nbHits ?? 0);
      setTimeout(() => setShow(true), 1000);
      setTimeout(() => setRefreshedResult(true), 1000);
    }
  }, [data]);

  return (
    <div>
      <p>SearchBar</p>
      <input
        type="text"
        value={valueInput}
        onChange={(event) => setValueInput(event.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setTextToSearch(valueInput);
          setPageNumber(1);
        }}
      >
        Go
      </button>
    </div>
  );
};

export default React.memo(SearchBar);
