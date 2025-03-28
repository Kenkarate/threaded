import { Button, Form, Input, Upload } from "antd";
import React from "react";
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';

function Link() {

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      <Input
        style={{ margin: "5%", width: "90%" }}
        placeholder="Enter product details..."
      />
      <div style={{ margin: "5%", width: "90%" }}>
      <Form.Item
      name="upload"
      label="Upload"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      extra="long"
    >
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    </Form.Item>
      </div>
    </div>
  );
}

export default Link;
