import { Form, Input, Button, Checkbox } from 'antd';
import Password from 'antd/lib/input/Password';
import { Redirect, useHistory } from 'react-router';
import { useState } from 'react';


export function PageLogin({setAutorizado}) {
    
    let history = useHistory();
    
const onFinish= (values) => {
    if (values.username === "test" && values.password === "test") {
        setAutorizado(true);
        history.push("/nosotros");
    } else {
        setAutorizado(false);
        alert("contraseña incorrecta")
    }
  };

  const onFinishFailed= (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Form
      name="login"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
