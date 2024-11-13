import { useState } from "react";
import { loginToTheBackend } from "../api/login.js";
import { Button, Form, Input } from "antd";
import { useUserContext } from "../provider/UserProvider.jsx";
import { setAuth } from "../api/axios.js";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { user, setUser } = useUserContext();
  const [receivedData, setReceivedData] = useState();
  const navigate = useNavigate();

  const login = async () => {
    const data = await loginToTheBackend(
      btoa(`${user.username}:${user.password}`)
    );

    if (data.status == 200) {
      console.log(data.data.token);
      setUser({ ...user, token: data.data.token, id: data.data.id });
      setAuth(data.data.token);
      navigate("/");
    }
    setReceivedData(data);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" onClick={login} htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {receivedData?.status == 401 ? <p>Unable to login</p> : null}
    </div>
  );
};

export default LoginPage;
