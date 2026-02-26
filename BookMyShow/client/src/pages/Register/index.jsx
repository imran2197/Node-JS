import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";

const Register = () => {
  return (
    <>
      <main className="auth-page">
        <section className="auth-card register-card">
          <h1 className="auth-title">Create Account </h1>
          <Form layout="vertical">
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter your Name"></Input>
            </Form.Item>

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

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Password and Confirm Password do not match"),
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>

            <Button htmlType="submit" className="auth-btn">
              Register
            </Button>
          </Form>
          <Link to="/login" className="auth-link">
            Already have an account? Login
          </Link>
        </section>
      </main>
    </>
  );
};

export default Register;
