import React from "react";
import { BellFilled } from "@ant-design/icons";
import { Layout, Button, Row, Col } from "antd";
import "./index.css";

const { Header } = Layout;

const UIUCHeader = () => {
  return (
    <Header className="light-theme">
      <Row>
        <Col className="item-right" span={4} offset={20}>
          <BellFilled className="avatar-icon" />
          <Button className="avatar-name">S</Button>
        </Col>
      </Row>
    </Header>
  );
};

export default UIUCHeader;
