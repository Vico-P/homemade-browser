import { createContext, useState } from "react";
import { GoogleItems, SearchType } from "../../types/types";

const ResearchContext = createContext({
  researchResult: [] as GoogleItems[],
  setResearchResult: (newValue: GoogleItems[]) => {},
  nbHits: -1,
  setNbHits: (newValue: number) => {},
  pageNumber: 1,
  setPageNumber: (newValue: number) => {},
  show: true,
  setShow: (newValue: boolean) => {},
  refreshedResult: true,
  setRefreshedResult: (newValue: boolean) => {},
  launchedResearchOnce: false,
  setLaunchedResearchOnce: (newValue: boolean) => {},
  searchType: SearchType.SEARCH_TYPE_UNDEFINED,
  setSearchType: (newValue: SearchType) => {},
});

const ResearchProvider: (props: { children: JSX.Element }) => JSX.Element = ({
  children,
}) => {
  const [researchResult, setResearchResult] = useState<GoogleItems[]>([]);
  const [nbHits, setNbHits] = useState<number>(-1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [show, setShow] = useState<boolean>(true);
  const [refreshedResult, setRefreshedResult] = useState<boolean>(false);
  const [launchedResearchOnce, setLaunchedResearchOnce] =
    useState<boolean>(false);
  const [searchType, setSearchType] = useState<SearchType>(
    SearchType.SEARCH_TYPE_UNDEFINED
  );

  return (
    <ResearchContext.Provider
      value={{
        researchResult,
        setResearchResult: (newValue: GoogleItems[]) =>
          setResearchResult(newValue),
        nbHits,
        setNbHits: (newValue: number) => setNbHits(newValue),
        pageNumber,
        setPageNumber: (newValue: number) => setPageNumber(newValue),
        show,
        setShow: (newValue: boolean) => setShow(newValue),
        refreshedResult,
        setRefreshedResult: (newValue: boolean) => setRefreshedResult(newValue),
        launchedResearchOnce,
        setLaunchedResearchOnce: (newValue: boolean) =>
          setLaunchedResearchOnce(newValue),
        searchType,
        setSearchType: (newValue: SearchType) => setSearchType(newValue),
      }}
    >
      {children}
    </ResearchContext.Provider>
  );
};

export { ResearchContext, ResearchProvider };
