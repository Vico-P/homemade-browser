import { GoogleItems } from "../../types/types";
import React, { useState } from "react";
import { Button, Card, Modal, Space, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import * as FileSaver from "file-saver";

const ImageResult: (item: GoogleItems) => JSX.Element = ({
  link,
  snippet,
  title,
}) => {
  const [width, setWidth] = useState<number>(-1);
  const [height, setHeight] = useState<number>(200);
  const [imgRealWidth, setImgRealWidth] = useState<number>(-1);
  const [imgRealHeight, setImgRealHeight] = useState<number>(-1);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <Card
        onClick={() => setShowModal(true)}
        cover={
          <img
            onLoad={({ target: img }: { target: any }) => {
              const { offsetHeight, offsetWidth } = img;
              setHeight(offsetHeight);
              setWidth(offsetWidth);
            }}
            src={link}
            style={{ width: width > 0 ? width : "auto", height }}
          />
        }
        hoverable
      >
        <Card.Meta
          title={title}
          description={
            <small>
              <Typography.Paragraph
                style={{
                  width: width > 0 ? width - 50 : "auto",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  height: 25,
                }}
              >
                {snippet}
              </Typography.Paragraph>
            </small>
          }
          style={{
            width: width > 0 ? width - 50 : "auto",
            maxWidth: width > 0 ? width : "auto",
            maxHeight: 50,
          }}
        />
      </Card>
      <Modal
        open={showModal}
        footer={null}
        title={null}
        onCancel={() => setShowModal(false)}
        closable={false}
        width={600}
      >
        <div className="col-12 row">
          <div style={{ maxWidth: width, display: "inline-block" }}>
            <img
              onLoad={({ target: img }: { target: any }) => {
                const { offsetHeight, offsetWidth } = img;
                setImgRealHeight(offsetHeight);
                setImgRealWidth(offsetWidth);
              }}
              src={link}
              style={{
                height: imgRealHeight < 0 ? "auto" : 200,
                width: "auto",
              }}
            />
          </div>
          <div
            className="d-flex flex-columns align-items-center justify-content-center"
            style={{
              display: "inline-block",
              position: "absolute",
              width: 600 - width - 25 > 300 ? 300 : 600 - width - 25,
              right: 0,
              height: "80%",
            }}
          >
            <Space direction="vertical">
              <Typography.Title
                level={4}
                style={{
                  width: 600 - width - 25 > 300 ? 300 : 600 - width - 25,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  height: 25,
                  textAlign: "center",
                }}
              >
                {title}
              </Typography.Title>
              <Typography.Paragraph className="col-12 d-flex justify-content-center">
                {imgRealWidth} X {imgRealHeight}{" "}
              </Typography.Paragraph>
              <div className="col-12 d-flex justify-content-center">
                <Button
                  type="primary"
                  shape="round"
                  icon={<DownloadOutlined />}
                  onClick={() => {
                    FileSaver.saveAs(
                      link,
                      link.split("/")[link.split("/").length - 1].split("?")[0]
                    );
                  }}
                >
                  Telecharger
                </Button>
              </div>
            </Space>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default React.memo(ImageResult);
