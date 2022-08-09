import React, { useState } from "react";
import iMovieLogo from "../assets/images/logo.png";
import user from "../assets/iconfont/user.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { userLogin } from "../api/login";
import "../assets/less/register.less";

export default function Login() {
  const [message, setMessage] = useState("1111111");
  const success = () => {
    message.success("This is a success message");
  };

  const error = () => {
    message.error("This is an error message");
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    userLogin(values).then((reponse) => {
      setMessage(reponse.data);
    });
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 10,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  return (
    <div className="parent">
      <div className="logo">
        <img src={iMovieLogo} alt="" width="300px" height="300px" />
        <h1 className="description">iMovie</h1>
      </div>
      <div className="login_form">
        <h2 className="title">
          <img src={user} alt="" width="65px" height="63px" />
          Register
        </h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          {...formItemLayout}
        >
          <Form.Item
            name="Username"
            label="UserName"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              maxLength={10}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
