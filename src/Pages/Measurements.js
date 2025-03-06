import FormItemLabel from "antd/es/form/FormItemLabel";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import measureImage from ".././Assets/images/measure.webp";

function Measurements() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  return (
    <div className="mx-[5%] my-[5%] grid grid-cols-2">
      <div>
        <Title level={2}>Kindly fill out the measurements </Title>

        <Form
          layout={formLayout}
          form={form}
          initialValues={{
            layout: formLayout,
          }}
          onValuesChange={onFormLayoutChange}
          style={{
            maxWidth: formLayout === "vertical" ? "none" : 600,
          }}
        >
          <Form.Item layout="horizontal" label="Size" name="layout">
            <Radio.Group value={formLayout}>
              <Radio.Button value="XS">XS</Radio.Button>
              <Radio.Button value="S">S</Radio.Button>
              <Radio.Button value="M">M</Radio.Button>
              <Radio.Button value="L">L</Radio.Button>
              <Radio.Button value="XL">XL</Radio.Button>
              <Radio.Button value="2XL">2XL</Radio.Button>
              <Radio.Button value="3XL">3XL</Radio.Button>
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

      <div className="border-l-2 pl-5">
        <Title level={2}>How to measure</Title>
        <img src={measureImage} alt="" />
      </div>
    </div>
  );
}

export default Measurements;
