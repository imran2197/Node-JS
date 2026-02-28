import React from "react";
// import "./index.css";

import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { loginUser } from "../../api/users";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await loginUser(values);
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        navigate("/");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <>
      <main className="auth-page">
        <section className="auth-card">
          <h1 className="auth-title">Login</h1>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                {
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input placeholder="Enter your Email"></Input>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password placeholder="Enter password" />
            </Form.Item>

            <Button htmlType="submit" className="auth-btn">
              Login
            </Button>
          </Form>
          <Link to="/register" className="auth-link">
            Don't have an account? Register
          </Link>
        </section>
      </main>
    </>
  );
};

export default Login;
