import { createContext, useState } from "react";
import { GoogleItems } from "../../types/types";

const ResearchContext = createContext({
  researchResult: [] as GoogleItems[],
  setResearchResult: (newValue: GoogleItems[]) => {},
  nbHits: 0,
  setNbHits: (newValue: number) => {},
  pageNumber: 1,
  setPageNumber: (newValue: number) => {},
  show: true,
  setShow: (newValue: boolean) => {},
  refreshedResult: true,
  setRefreshedResult: (newValue: boolean) => {},
});

const ResearchProvider: (props: { children: JSX.Element }) => JSX.Element = ({
  children,
}) => {
  const [researchResult, setResearchResult] = useState<GoogleItems[]>([]);
  const [nbHits, setNbHits] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [show, setShow] = useState<boolean>(true);
  const [refreshedResult, setRefreshedResult] = useState<boolean>(false);

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
      }}
    >
      {children}
    </ResearchContext.Provider>
  );
};

export { ResearchContext, ResearchProvider };
