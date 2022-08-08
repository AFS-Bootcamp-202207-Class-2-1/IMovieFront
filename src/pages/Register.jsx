import React, { useState } from "react";
import iMovieLogo from "../assets/images/logo.png";
import user from "../assets/iconfont/user.png";
import boy from "../assets/images/boy.png";
import girl from "../assets/images/girl.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio, Upload, Modal, message } from "antd";
import { userRegister } from "../api/register";
import "../assets/less/register.less";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default function Register() {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [promptMessage, setPromptMessage] = useState("1111111");

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewVisible(true);
    setPreviewImage(file.url || file.preview);
  };

  const handleChange = ({ fileList }) => setFileList(fileList);

  const success = () => {
    message.success("This is a success message");
  };

  const error = () => {
    message.error("This is an error message");
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    userRegister(values).then((reponse) => {
      console.log(reponse.data, "reponseData");
      setPromptMessage(reponse.data);
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

  const uploadButton = (
    <div>
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <div className="parent">
      <div className="logo">
        <img src={iMovieLogo} alt="" width="300px" height="300px" />
        <h1 className="description">iMovie</h1>
      </div>
      <div className="register_form">
        <h2 className="title">
          <img src={user} alt="" width="65px" height="63px" />
          Register
        </h2>
        <Form
          name="normal_register"
          className="register-form"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          {...formItemLayout}
        >
          <Form.Item
            name="users_name"
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
            name="users_password"
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

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["users_password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("users_password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="users_gender"
            rules={[
              {
                required: true,
                message: "Please select your Gender!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="female">
                <img src={boy} alt="" width="50px" height="50px" />
              </Radio>
              <Radio value="male">
                <img src={girl} alt="" width="50px" height="50px" />
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Upload" valuePropName="fileList">
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="register-form-button"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
