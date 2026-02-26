import React from "react";
// import "./index.css";

import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";

const Login = () => {
  return (
    <>
      <main className="auth-page">
        <section className="auth-card">
          <h1 className="auth-title">Login</h1>
          <Form layout="vertical">
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
