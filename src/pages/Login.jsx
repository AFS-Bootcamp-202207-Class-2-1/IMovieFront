import React, { useState } from "react";
import iMovieLogo from "../assets/images/logo.png";
import user from "../assets/iconfont/user.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { NavLink } from "react-router-dom";
import { userLogin } from "../api/login";
import "../assets/less/register.less";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const success = () => {
    message.success("Login successfully");
  };

  const error = () => {
    message.error("The username and password are inconsistent");
  };

  const onFinish = async function (values) {
    const response = await userLogin(values);
    if (response.data === "login successfully") {
      success();
      navigate("/");
    } else {
      error();
    }
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
          Login
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
            name="usersName"
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
            name="usersPassword"
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
        <NavLink to="/register">立即注册</NavLink>
      </div>
    </div>
  );
}
