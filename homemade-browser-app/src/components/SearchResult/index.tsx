import { Button, Space } from "antd";
import React from "react";
import { GoogleItems } from "../../types/types";

const SearchResult: (item: GoogleItems) => JSX.Element = ({
  title,
  link,
  htmlSnippet,
}) => {
  const domain = link.split("://")[1].split("/")[0];
  const pathFormatted = `${link.split("://")[0]}://${link
    .split("://")[1]
    .split("/")
    .filter((val: string) => !!val)
    .join(" > ")}`;
  return (
    <div className="col-12 d-flex flex-column align-items-start mb-4">
      <Space>
        <img src={`http://www.google.com/s2/favicons?domain=${domain}`} />
        <small>{pathFormatted}</small>
      </Space>
      <Button type="link" className="p-0 h6 mb-0 mt-0 underline" href={link}>
        {title}
      </Button>
      <small
        className="col-8"
        dangerouslySetInnerHTML={{ __html: htmlSnippet }}
      />
    </div>
  );
};

export default React.memo(SearchResult);
