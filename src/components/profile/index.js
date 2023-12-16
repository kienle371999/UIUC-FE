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

const { Text } = Typography;
const { TextArea } = Input;

const publications = [
  {
    authors: "Hongyun Cai, Vincen W.Zheng, Chen-Chua Chang",
    name: (
      <span>
        <Text strong>
          A Comprehensive Survey of Graph EmbeddingLProblems, Techniques, and
          Applications.
        </Text>
        <Text> IEEE Trans, Knowl, Data Eng (2018)</Text>
      </span>
    ),
    tag: "Graph Embedding",
  },
  {
    authors: "A. Abdi, Wing-Cheong Lau, Mohamed‐Slim Alouini, M. Kaveh",
    name: (
      <span>
        <Text strong>
          A new simple model for land mobile satellite channels: first- and
          second-order statistics.
        </Text>
        <Text> IEEE Transactions on Wireless Communications (2003).</Text>
      </span>
    ),

    tag: "Remote Sensing",
  },
  {
    authors: "A. Abdi, M. Kaveh",
    name: (
      <span>
        <Text strong>
          A space-time correlation model for multielement antenna systems in
          mobile fading channels.
        </Text>
        <Text> IEEE Journal on Selected Areas in Communications (2002).</Text>
      </span>
    ),

    tag: "Mobile Fading Channel",
  },
  {
    authors: "A. Abdi, Jacob Barger, M. Kaveh",
    name: (
      <span>
        <Text strong>
          A Comprehensive Survey of Graph EmbeddingLProblems, Techniques, and
          Applications.
        </Text>
        <Text> IEE Trans, Knowl, Data Eng (2018).</Text>
      </span>
    ),
    tag: "Graph Embedding",
  },
  {
    authors: "Hongyun Cai, Vincen W.Zheng, Chen-Chua Chang",
    name: (
      <span>
        <Text strong>
          A parametric model for the distribution of the angle of arrival and
          the associated correlation function and power spectrum at the mobile
          station.
        </Text>
        <Text> IEEE Transactions on Vehicular Technology (2002).</Text>
      </span>
    ),
    tag: "Transportation Engineering",
  },
  {
    authors: "Mohamed‐Slim Alouini, A. Abdi, M. Kaveh",
    name: (
      <span>
        <Text strong>
          Sum of gamma variates and performance of wireless communication
          systems over Nakagami-fading channels.
        </Text>
        <Text> IEEE Transactions on Vehicular Technology (2001).</Text>
      </span>
    ),
    tag: "Communication",
  },
];

const awards = [
  {
    author:
      "Ali Abdi ali.abdi@njit.edu (Principal Investigator) Michael Ehrlich (Co-Principal Investigator)",
    name: (
      <span>
        <Text strong>
          PFI:AIR - TT: A Novel Vector Acoustic Communication Technology for
          High Speed Underwater Modems, Accelerating Innovation Rsrch (2015),
        </Text>
        <Text> Accelerating Innovation Rsrch (2015)</Text>
      </span>
    ),
    amount: "3000 USD",
  },
  {
    author: "Ali Abdi ali.abdi@njit.edu",
    name: (
      <span>
        <Text strong>
          Collaborative Research: Data Communication via Particle Velocity
          Channels - A Paradigm Shift in Underwater Acoustic Communication,
        </Text>
        <Text> SIGNAL PROCESSING SYS</Text>
      </span>
    ),
    amount: "5000 USD",
  },
  {
    author:
      "Ali Abdi ali.abdi@njit.edu (Principal Investigator) Michael Ehrlich (Co-Principal Investigator)",
    name: (
      <span>
        <Text strong>
          I-Corps: Data communication via the vector components of the acoustic
          field,{" "}
        </Text>
        <Text> I-Corps (2013)</Text>
      </span>
    ),
    amount: "5000 USD",
  },
  {
    author: "Ali Abdi ali.abdi@njit.edu",
    name: (
      <span>
        <Text strong>
          I-Corps: Data communication via the vector components of the acoustic
          field,{" "}
        </Text>
        <Text> I-Corps (2016)</Text>
      </span>
    ),
    amount: "5000 USD",
  },
  {
    author: "Ali Abdi ali.abdi@njit.edu",
    name: (
      <span>
        <Text strong>
          I-Corps: Data communication via the vector components of the acoustic
          field,{" "}
        </Text>
        <Text> I-Corps (2020)</Text>
      </span>
    ),
    amount: "8000 USD",
  },
  {
    author: "Ali Abdi ali.abdi@njit.edu",
    name: (
      <span>
        <Text strong>
          I-Corps: Data communication via the vector components of the acoustic
          field,{" "}
        </Text>
        <Text> I-Corps (2022)</Text>
      </span>
    ),
    amount: "10000 USD",
  },
];

const experience = {
  university: "University of Tabriz",
  duration: "2000 - Now",
};

const Profile = () => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPublications, setSelectedPublications] = useState(
    publications.slice(0, 3)
  );
  const [selectedAwards, setSelectedAwards] = useState(awards.slice(0, 3));
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    setSelectedPublications(pubs);
  };

  const getPaginationAward = (page, pageSize) => {
    const newAwards = awards.slice((page - 1) * pageSize, page * pageSize);
    setSelectedAwards(newAwards);
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
                {pub.name}
                <Tag>{pub.tag}</Tag>
                <Divider />
              </Space>
            ))}
            <Pagination
              className="fl-right"
              defaultCurrent={1}
              pageSize={3}
              total={publications.length}
              onChange={(page, pageSize) => getPaginationPub(page, pageSize)}
            />
          </div>
        );
      case "AWARDS":
        return (
          <div>
            {selectedAwards.map((award, index) => (
              <Space direction="vertical">
                <Text>{award.author}</Text>
                {award.name}
                <Tag>{award.amount}</Tag>
                <Divider />
              </Space>
            ))}
            <Pagination
              className="fl-right"
              defaultCurrent={1}
              pageSize={3}
              total={awards.length}
              onChange={(page, pageSize) => getPaginationAward(page, pageSize)}
            />
          </div>
        );
      case "EXPERIENCES":
        return (
          <Space direction="vertical">
            <Text strong>{experience.university}</Text>
            <Text>{experience.duration}</Text>
          </Space>
        );
      default:
        return <div />;
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
                    alt="Avatar of the professor"
                  />
                </Col>
                <Col span={20}>
                  {personItems.map((item, index) => (
                    <Space direction="vertical">
                      <Text strong>{item.key}</Text>
                      <div>
                        {item.key === "Description" ? (
                          <TextArea
                            className="area-item"
                            value={item.value}
                            disabled="true"
                          />
                        ) : (
                          <Input
                            className="input-item"
                            value={item.value}
                            disabled="true"
                          />
                        )}
                        <EditOutlined
                          onClick={() => enableChangePersonInfo(index)}
                        />
                      </div>
                    </Space>
                  ))}

                  <Modal
                    title={`Edit ${personItems[selectedIndex].key}`}
                    open={isModalOpen}
                    onOk={() => setIsModalOpen(false)}
                    onCancel={() => setIsModalOpen(false)}
                  >
                    {personItems[selectedIndex].key === "Description" ? (
                      <TextArea
                        className="area-modal-item"
                        value={personItems[selectedIndex].value}
                        onChange={(e) =>
                          changePersonInfo(selectedIndex, e.target.value)
                        }
                      />
                    ) : (
                      <Input
                        value={personItems[selectedIndex].value}
                        onChange={(e) =>
                          changePersonInfo(selectedIndex, e.target.value)
                        }
                      />
                    )}
                  </Modal>
                </Col>
              </Row>
            </div>
            <div className="space-item mh-item m-15">
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
