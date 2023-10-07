"use client";

import { Button, Col, Form, Input, Row, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { customSignIn } from "@/lib/actions/user.actions";
import React, { useState } from "react";
import { AdminAuth } from "@/app/context/AuthContext";
import { useCookies } from "react-cookie";

type FieldTypes = {
  email?: string;
  password?: string;
  remember?: string;
};

type LoginInfo = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies();

  const { setAdmin } = AdminAuth();

  const onFinish = async (values: LoginInfo) => {
    const { email, password } = values;
    setIsLoading(true);
    const adminRes = await customSignIn({
      email: email,
      password: password,
    });
    if (adminRes?.success) {
      setIsLoading(false);
      setAdmin(adminRes?.data);
      setCookie("email", adminRes.data.email, {
        path: "/",
        maxAge: 259200,
      });
      setCookie("uid", adminRes.data.uid, {
        path: "/",
        maxAge: 259200,
      });
      router.replace("/");
    } else {
      setIsLoading(false);
      message.error({
        content: adminRes?.data,
      });
    }
  };
  return (
    <main className="p-4">
      <Row className={"wrapper container"}>
        {/* DESIGN COLUMN */}
        <Col md={{ span: 8 }} className={"design"}>
          <div className={"pill-2 rotate-45"}></div>
          <div className={"pill-4 rotate-45"}></div>
          <div className={"pill-3 rotate-45"}></div>
        </Col>
        {/* FORM COLUMN */}
        <Col offset={2} span={20} md={{ span: 8, offset: 0 }}>
          <h3 className="title">Login - AdminPal</h3>
          <Form
            name="normal_login"
            autoComplete="off"
            onFinish={onFinish}
            className={"login-form"}
          >
            {/* USERNAME INPUT */}
            <Form.Item<FieldTypes> name={"email"}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                size={"large"}
              />
            </Form.Item>
            {/* PASSWORD INPUT */}
            <Form.Item<FieldTypes> name="password">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type={"password"}
                placeholder={"Password"}
                size={"large"}
              />
            </Form.Item>
            {/* SUBMIT INPUT */}
            <Form.Item wrapperCol={{ offset: 8 }}>
              <Button
                type="primary"
                htmlType="submit"
                className={"bg-blue-400"}
              >
                {!isLoading ? <p>Sign In</p> : <p>Loading...</p>}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </main>
  );
}
