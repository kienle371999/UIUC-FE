import {
  Row,
  Col,
  Layout,
  Input,
  Modal,
  Tabs,
  Space,
  Typography,
  Tag,
  Divider,
  Pagination,
} from "antd";
import { Content } from "antd/es/layout/layout";
import UIUCHeader from "../common/UIUCHeader";
import UIUCSider from "../common/UIUCSider";
import Person from "../../imgs/person.jpg";
import "./index.css";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { InternalBreadcrumbItem } from "antd/es/breadcrumb/BreadcrumbItem";

const { Text } = Typography;

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [page, setPage] = useState(1);

  const [personItems, setPersonItems] = useState([
    {
      key: "Name",
      value: "Brian Berry",
    },
    {
      key: "Title",
      value: "Professor",
    },
    {
      key: "University",
      value: "University of Ilinois Urban Champaign",
    },
    {
      key: "Description",
      value:
        "Brian Berry is a distinguished academic, currently serving as a Lloyd Viel Berkner Regental Professor",
    },
  ]);

  const publications = [
    {
      authors: "Hongyun Cai, Vincen W.Zheng, Chen-Chua Chang",
      name: "A Comprehensive Survey of Graph EmbeddingLProblems, Techniques, and Applications. IEE Trans, Knowl, Data Eng (2018).",
      tag: "Graph Embedding",
    },
    {
      authors: "Hongyun Cai, Vincen W.Zheng, Chen-Chua Chang",
      name: "A Comprehensive Survey of Graph EmbeddingLProblems, Techniques, and Applications. IEE Trans, Knowl, Data Eng (2018).",
      tag: "Graph Embedding",
    },
    {
      authors: "Hongyun Cai, Vincen W.Zheng, Chen-Chua Chang",
      name: "A Comprehensive Survey of Graph EmbeddingLProblems, Techniques, and Applications. IEE Trans, Knowl, Data Eng (2018).",
      tag: "Graph Embedding",
    },
    {
      authors: "Hongyun Cai, Vincen W.Zheng, Chen-Chua Chang",
      name: "A Comprehensive Survey of Graph EmbeddingLProblems, Techniques, and Applications. IEE Trans, Knowl, Data Eng (2018).",
      tag: "Graph Embedding",
    },
    {
      authors: "Hongyun Cai, Vincen W.Zheng, Chen-Chua Chang",
      name: "A Comprehensive Survey of Graph EmbeddingLProblems, Techniques, and Applications. IEE Trans, Knowl, Data Eng (2018).",
      tag: "Graph Embedding",
    },
    {
      authors: "Hongyun Cai, Vincen W.Zheng, Chen-Chua Chang",
      name: "A Comprehensive Survey of Graph EmbeddingLProblems, Techniques, and Applications. IEE Trans, Knowl, Data Eng (2018).",
      tag: "Graph Embedding",
    },
  ];

  const [selectedPublications, setSelectedPublications] = useState(
    publications.slice(0, 3)
  );

  const enableChangePersonInfo = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const changePersonInfo = (index, value) => {
    const copyPersonItems = [...personItems];
    personItems[index].value = value;
    setPersonItems(copyPersonItems);
  };

  const getPaginationPub = (page, pageSize) => {
    const pubs = publications.slice((page - 1) * pageSize, page * pageSize);
    console.log(pubs, publications);
    setSelectedPublications(pubs);
  };

  const personAttachment = ["PUBLICATIONS", "AWARDS", "EXPERIENCES", "PEER"];
  const getAttachment = (item) => {
    switch (item) {
      case "PUBLICATIONS":
        return (
          <div>
            {selectedPublications.map((pub, index) => (
              <Space direction="vertical">
                <Text>{pub.authors}</Text>
                <Text strong>{pub.name}</Text>
                <Tag>{pub.tag}</Tag>
                {index != selectedPublications.length - 1 ? (
                  <Divider />
                ) : (
                  <div />
                )}
              </Space>
            ))}
            <Pagination
              defaultCurrent={1}
              pageSize={3}
              total={publications.length}
              onChange={(page, pageSize) => getPaginationPub(page, pageSize)}
            />
          </div>
        );

        publications.map((pub) => (
          <div>
            <Text>{pub.author}</Text>
            <Text strong>{pub.name}</Text>
            <Tag>{pub.tag}</Tag>
            <Divider />
          </div>
        ));
        break;
      default:
        return <div>{`HELLO ${item}`}</div>;
    }
  };

  return (
    <Layout className="profile-site">
      <UIUCSider />
      <Layout>
        <UIUCHeader />
        <Content>
          <div className="profile-content">
            <div className="space-item">
              <Row>
                <Col span={4}>
                  <img
                    className="person-img"
                    src={Person}
                    alt="Image of perople"
                  />
                </Col>
                <Col span={20}>
                  {personItems.map((item, index) => (
                    <div>
                      <Input
                        className="input-item"
                        value={item.value}
                        disabled="true"
                      />
                      <EditOutlined
                        onClick={() => enableChangePersonInfo(index)}
                      />
                    </div>
                  ))}

                  <Modal
                    title={`Edit ${personItems[selectedIndex].key}`}
                    open={isModalOpen}
                    onOk={() => setIsModalOpen(false)}
                    onCancel={() => setIsModalOpen(false)}
                  >
                    <Input
                      value={personItems[selectedIndex].value}
                      onChange={(e) =>
                        changePersonInfo(selectedIndex, e.target.value)
                      }
                    />
                  </Modal>
                </Col>
              </Row>
            </div>
            <div className="space-item m-15">
              <Tabs
                defaultActiveKey="1"
                type="card"
                items={personAttachment.map((item) => {
                  return {
                    label: item,
                    key: item,
                    children: getAttachment(item),
                  };
                })}
              />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Profile;
