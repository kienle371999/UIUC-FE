import {
  Space,
  Typography,
  Row,
  Col,
  Select,
  Divider,
  Table,
  Progress,
  Layout,
} from "antd";
import UIUCSider from "../common/UIUCSider";
import UIUCHeader from "../common/UIUCHeader";
import "./index.css";

const { Title, Text } = Typography;
const { Content } = Layout;

const universityColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Affiliation",
    dataIndex: "affiliation",
    key: "affiliation",
  },
  {
    title: "Natural Language Processing",
    key: "nlp",
    dataIndex: "nlp",
    render: (_, { nlp }) => <Progress percent={nlp} />,
  },
  {
    title: "Data Mining",
    key: "data_mining",
    dataIndex: "data_mining",
    render: (_, { data_mining }) => <Progress percent={data_mining} />,
  },
];

const universityData = [
  {
    name: "John Smith",
    affiliation: "University of Exceter",
    nlp: 20,
    data_mining: 40,
  },
  {
    name: "Peter Henry",
    affiliation: "Munich University",
    nlp: 30,
    data_mining: 60,
  },
];

const University = () => {
  return (
    <Layout className="university-site">
      <UIUCSider />
      <Layout>
        <UIUCHeader />
        <Content>
          <div className="university-content">
            <div className="space-item">
              <Title level={3}>FILTER</Title>
              <Divider />
              <Row>
                <Col span={8}>
                  <Title className="ml-0" level={5}>
                    Category
                  </Title>
                  <Select
                    className="selection-item"
                    defaultValue="lucy"
                    options={[{ value: "lucy", label: "Lucy" }]}
                  />
                </Col>
                <Col span={8}>
                  <Title className="ml-0" level={5}>
                    Major
                  </Title>

                  <Select
                    className="selection-item"
                    defaultValue="lucy"
                    options={[{ value: "lucy", label: "Lucy" }]}
                  />
                </Col>
                <Col span={8}>
                  <Title className="ml-0" level={5}>
                    Faculty
                  </Title>

                  <Select
                    className="selection-item"
                    defaultValue="lucy"
                    options={[{ value: "lucy", label: "Lucy" }]}
                  />
                </Col>
              </Row>
            </div>
            <div className="space-item m-15">
              <Table columns={universityColumns} dataSource={universityData} />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default University;
