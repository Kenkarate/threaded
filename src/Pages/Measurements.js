import FormItemLabel from "antd/es/form/FormItemLabel";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";

function Measurements() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  return (
    <div>
      <div className="mx-[5%] my-[5%]">
        <Title level={2}>Kindly fill out the measurements form</Title>

        <Form
          layout={formLayout}
          form={form}
          initialValues={{
            layout: formLayout,
          }}
          onValuesChange={onFormLayoutChange}
          style={{
            maxWidth: formLayout === "inline" ? "none" : 600,
          }}
        >
          <Form.Item layout="horizontal" label="Size" name="layout">
            <Radio.Group value={formLayout}>
              <Radio.Button value="horizontal">XS</Radio.Button>
              <Radio.Button value="vertical">S</Radio.Button>
              <Radio.Button value="inline">M</Radio.Button>
              <Radio.Button value="inline">L</Radio.Button>
              <Radio.Button value="inline">XL</Radio.Button>
              <Radio.Button value="inline">2XL</Radio.Button>
              <Radio.Button value="inline">3XL</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Bust">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Waist">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Shoulder">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Blouse Length">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Measurements;
