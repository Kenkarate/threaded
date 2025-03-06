import { Button, Form, Input, Radio, Select } from "antd";
import Title from "antd/es/typography/Title";
import country from "../Utils/country.json";
import React, { useState } from "react";

function Address() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  return (
    <div className="p-[5%]">
      <div>
        <Title level={2}>Delivery</Title>

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
          {/* <Form.Item layout="horizontal" label="Size" name="layout">
            <Radio.Group value={formLayout}>
              <Radio.Button value="XS">XS</Radio.Button>
              <Radio.Button value="S">S</Radio.Button>
              <Radio.Button value="M">M</Radio.Button>
              <Radio.Button value="L">L</Radio.Button>
              <Radio.Button value="XL">XL</Radio.Button>
              <Radio.Button value="2XL">2XL</Radio.Button>
              <Radio.Button value="3XL">3XL</Radio.Button>
            </Radio.Group>
          </Form.Item> */}
          <Form.Item label="">
            <Input placeholder="Country"></Input>
          </Form.Item>
          <div className="grid grid-cols-2">
            <Form.Item label="">
              <Input placeholder="First name" />
            </Form.Item>
            <Form.Item label="" className="pl-2">
              <Input placeholder="Last Name" />
            </Form.Item>
          </div>

          <Form.Item label="">
            <Input placeholder="Address" />
          </Form.Item>
          <div className="grid grid-cols-3 gap-2">
            <Form.Item label="">
              <Input placeholder="City" />
            </Form.Item>
            <Form.Item label="">
              <Input placeholder="State" />
            </Form.Item>
            <Form.Item label="">
              <Input placeholder="Pin Code" />
            </Form.Item>
          </div>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
      <div className="border-t-2 my-[5%]">
        <Title>Shipping method</Title>
        <div>
          <p>Enter your shipping address to view shipping options</p>
        </div>
      </div>
      <div className="border-t-2 my-[5%]">
        <Title>Payments</Title>
        <p>All transactions are secured and encrypted</p>
      </div>
    </div>
  );
}

export default Address;
