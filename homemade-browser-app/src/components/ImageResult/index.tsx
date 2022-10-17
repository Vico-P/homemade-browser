import { GoogleItems } from "../../types/types";
import React, { useState } from "react";
import { Card, Modal, Space, Typography } from "antd";

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
        width={700}
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
              maxWidth:
                // TODO Rework this computation
                700 - 125 - width - 25 > 200
                  ? 200
                  : 700 - 125 - width - 10 - 25,
              display: "inline-block",
              marginLeft: 125,
            }}
          >
            <Space direction="vertical">
              <Typography.Title
                level={4}
                style={{
                  // TODO Rework this computation
                  width: 700 - 125 - width > 200 ? 200 : 700 - 125 - width - 10,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  height: 25,
                }}
              >
                {title}
              </Typography.Title>
              <Typography.Paragraph>
                {imgRealWidth} X {imgRealHeight}
              </Typography.Paragraph>
            </Space>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default React.memo(ImageResult);
