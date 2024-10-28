import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Header style={{ background: "#fff" }}>
        <Menu mode="horizontal" style={{ border: "none" }}>
          <Menu.Item key="home">
            <Link to="/">
              <Title level={4} style={{ margin: 0 }}>
                Home
              </Title>
            </Link>
          </Menu.Item>
          <Menu.Item key="patients">
            <Link to="/patients">
              <Title level={4} style={{ margin: 0 }}>
                Patients
              </Title>
            </Link>
          </Menu.Item>
          <Menu.Item key="add-patient">
            <Link to="/patients/create">
              <Title level={4} style={{ margin: 0 }}>
                Add Patient
              </Title>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "20px" }}>{children}</Content>
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
