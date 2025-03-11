import { Button, Form, Input, Radio, Select } from "antd";
import Title from "antd/es/typography/Title";
import { Typography } from "antd";
// import country from "../Utils/country.json";
import React, { useState } from "react";
import { db } from "../../Firebase"; // Your Firebase config file
import { collection, addDoc } from "firebase/firestore";
import { message } from "antd";

const { Title } = Typography;

function Address() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const handleSubmit = async (values) => {
      try {
        const formData = {
          country: values.country,
          firstname: values.firstname,
          lastname: values.lastname,
          address: values.address,
          city: values.city,
          state: values.state,
          pincode: values.pincode,
        };
        console.log(db); 
        console.log(formData);
        // Add data to Firestore
        await addDoc(collection(db, "address"), formData)
        .then(() => {
          console.log("Address Data added successfully!");
        })
        .catch((error) => {
          console.error("Firestore Error:", error.message);
        });
        message.success("Address saved successfully!");
        form.resetFields();
      } catch (error) {
        message.error("Error saving address: " + error.message);
      }};
  return (
    <div className="p-[5%]">
      <div>
        <Title level={2}>Delivery</Title>
        <Form
          layout={formLayout}
          onFinish={handleSubmit}
          form={form}
          initialValues={{
            layout: formLayout,
          }}
          onValuesChange={onFormLayoutChange}
          style={{
            maxWidth: formLayout === "vertical" ? "none" : 600,
          }}>
          <Form.Item label="" name="country" rules={[{ required: true, message: "country required" }]}>
            <Input placeholder="Country"></Input>
          </Form.Item>
          <div className="grid grid-cols-2">
            <Form.Item label="" name="firstname" rules={[{ required: true, message: "First Name required" }]}>
              <Input placeholder="First Name"/>
            </Form.Item>
            <Form.Item label="" className="pl-2" name="lastname" rules={[{ required: true, message: "Last Name required" }]}>
              <Input placeholder="Last Name" />
            </Form.Item>
          </div>

          <Form.Item label="" name="address" rules={[{ required: true, message: "Address required" }]}>
            <Input placeholder="Address"/>
          </Form.Item>
          <div className="grid grid-cols-3 gap-2">
            <Form.Item label="" name="city" rules={[{ required: true, message: "City required" }]}>
              <Input placeholder="City"/>
            </Form.Item>
            <Form.Item label="" name="state" rules={[{ required: true, message: "State required" }]}>
              <Input placeholder="State"/>
            </Form.Item>
            <Form.Item label="" name="pincode" rules={[{ required: true, message: "Pin Code required" }]}>
              <Input placeholder="Pin Code"/>
            </Form.Item>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
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
