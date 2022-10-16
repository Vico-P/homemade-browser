import React, { useContext } from "react";
import SearchBar from "./components/SearchBar";
import { ResearchContext } from "./context/ResearchContext";
import Result from "./components/Result";
import { Pagination, Tabs, Space, Card } from "antd";
import QueueAnim from "rc-queue-anim";
import { FileImageOutlined, SearchOutlined } from "@ant-design/icons";

const App: () => JSX.Element = () => {
  const {
    researchResult,
    nbHits,
    pageNumber,
    setPageNumber,
    show,
    refreshedResult,
    launchedResearchOnce,
  } = useContext(ResearchContext);

  const items = [
    {
      label: (
        <Space>
          <SearchOutlined />
          Tous
        </Space>
      ),
      key: "search",
      children: (
        <div key="results" style={{ marginLeft: 135 }}>
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
        </div>
      ),
    },
    {
      label: (
        <Space>
          <FileImageOutlined />
          Images
        </Space>
      ),
      key: "images",
      children: (
        <div key="results apply-padding">
          <QueueAnim duration={3000}>
            {refreshedResult
              ? [
                  ...researchResult.map((item, index) => (
                    <div key={`result${index}`}>
                      <Card key={index} />
                    </div>
                  )),
                ]
              : null}
          </QueueAnim>
        </div>
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
                <div key="tabs">{nbHits >= 0 && <Tabs items={items} />}</div>,
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

export default App;
