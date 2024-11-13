import { Layout, Menu } from "antd";
import { UserOutlined, HomeOutlined, MessageOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const { Header, Content } = Layout;

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header with Menu */}
      <Header
        style={{ background: "#001529", display: "flex", alignItems: "center" }}
      >
        <div style={{ color: "white", fontSize: "18px", marginRight: "20px" }}>
          Messager
        </div>
        <Menu
          theme="dark"
          style={{ minWidth: "300px" }}
          mode="horizontal"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
        >
          <Menu.Item
            onClick={() => navigate("/")}
            key="/"
            icon={<HomeOutlined />}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="/login"
            onClick={() => navigate("/login")}
            icon={<UserOutlined />}
          >
            Login
          </Menu.Item>
          <Menu.Item
            key="/my-messages"
            onClick={() => navigate("/my-messages")}
            icon={<MessageOutlined />}
          >
            My Messages
          </Menu.Item>
          <Menu.Item
            key="/send-message"
            onClick={() => navigate("/send-message")}
            icon={<MessageOutlined />}
          >
            Send Message
          </Menu.Item>
        </Menu>
      </Header>

      {/* Content Area */}
      <Content style={{ margin: "16px" }}>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default MainLayout;
