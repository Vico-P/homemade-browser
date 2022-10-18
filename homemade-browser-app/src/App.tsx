import React, { useContext } from "react";
import SearchBar from "./components/SearchBar";
import { ResearchContext } from "./context/ResearchContext";
import SearchResult from "./components/SearchResult";
import { Pagination, Tabs, Space } from "antd";
import QueueAnim from "rc-queue-anim";
import { FileImageOutlined, SearchOutlined } from "@ant-design/icons";
import { SearchType } from "./types/types";
import ImageResult from "./components/ImageResult";

const App: () => JSX.Element = () => {
  const {
    researchResult,
    nbHits,
    pageNumber,
    setPageNumber,
    show,
    refreshedResult,
    launchedResearchOnce,
    setSearchType,
  } = useContext(ResearchContext);

  const items = [
    {
      label: (
        <Space>
          <SearchOutlined />
          Tous
        </Space>
      ),
      key: SearchType.SEARCH_TYPE_UNDEFINED,
      children: (
        <QueueAnim
          duration={3000}
          key="results"
          style={{ paddingLeft: 135, paddingRight: 135 }}
        >
          {refreshedResult
            ? [
                ...researchResult.map((item, index) => (
                  <div key={`result${index}`}>
                    <SearchResult key={index} {...item} />
                  </div>
                )),
              ]
            : null}
        </QueueAnim>
      ),
    },
    {
      label: (
        <Space>
          <FileImageOutlined />
          Images
        </Space>
      ),
      key: SearchType.IMAGE,
      children: (
        <QueueAnim
          duration={3000}
          key="resultsImg"
          className="col-12 row"
          style={{ paddingLeft: 15, paddingRight: 15 }}
        >
          {refreshedResult
            ? [
                ...researchResult.map((item, index) => (
                  <div
                    key={`resultImg${index}`}
                    className="mb-2"
                    style={{ width: "auto" }}
                  >
                    <ImageResult key={index} {...item} />
                  </div>
                )),
              ]
            : null}
        </QueueAnim>
      ),
    },
  ];
  return (
    <div className="h-100">
      <QueueAnim duration={3000} className="h-100">
        {show
          ? launchedResearchOnce
            ? [
                <div key="searchbar" className="w-100">
                  <SearchBar />
                </div>,
                <div key="tabs">
                  {nbHits >= 0 && (
                    <Tabs
                      items={items}
                      onChange={(tabKey) => {
                        setSearchType(tabKey as SearchType);
                        setPageNumber(1);
                      }}
                    />
                  )}
                </div>,
                <div
                  key="pagination"
                  className="col-12 d-flex justify-content-center"
                >
                  {nbHits > 0 && (
                    <Pagination
                      onChange={(page) => {
                        setPageNumber(page);
                      }}
                      current={pageNumber}
                      total={nbHits}
                      showLessItems={true}
                      showSizeChanger={false}
                      className="mb-4"
                    />
                  )}
                </div>,
              ]
            : [
                <div key="searchbar" className="w-100 h-100">
                  <SearchBar />
                </div>,
              ]
          : null}
      </QueueAnim>
    </div>
  );
};

export default React.memo(App);
