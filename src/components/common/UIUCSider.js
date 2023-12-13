import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Row, Col, Typography } from "antd";
import Logo from "../../imgs/uiuc-logo.png";
import "./index.css";

const { Sider } = Layout;

const UIUCSider = () => {
  const { Text } = Typography;

  return (
    <Sider className="light-theme" width="25%">
      <div className="logo-uuic">
        <Row align="middle">
          <Col span={6}>
            <img src={Logo} alt="UIUC website logo" />
          </Col>
          <Col span={18}>
            <Typography className="uiuc-name">UIUC COURSE</Typography>
          </Col>
        </Row>
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: <Text strong>Faculty</Text>,
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: <Text strong>Institution</Text>,
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: <Text strong>Venue</Text>,
          },
          {
            key: "4",
            icon: <UploadOutlined />,
            label: <Text strong>Concept</Text>,
          },
        ]}
      />
    </Sider>
  );
};

export default UIUCSider;
