import FormItemLabel from "antd/es/form/FormItemLabel";
// import Title from "antd/es/typography/Title";
import { Typography } from "antd";
import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import measureImage from ".././Assets/images/measure.webp";
import { db } from "../../Firebase"; // Your Firebase config file
import { collection, addDoc } from "firebase/firestore";
import { message } from "antd";


const { Title } = Typography;

function Measurements() {
  const [form] = Form.useForm();
  const [size, setSize] = useState(null);
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleSubmit = async (values) => {
    try {
      const formData = {
        size: values.size,
        bust: values.bust,
        waist: values.waist,
        shoulder: values.shoulder,
        blouseLength: values.blouseLength,
      };
      console.log(db); 
console.log(formData);
      // Add data to Firestore
      await addDoc(collection(db, "measurements"), formData)
      .then(() => {
        console.log("Data added successfully!");
      })
      .catch((error) => {
        console.error("Firestore Error:", error.message);
      });
      message.success("Measurements saved successfully!");
      form.resetFields();
      setSize(null); // Reset size selection
    } catch (error) {
      message.error("Error saving measurements: " + error.message);
    }};
  return (
    <div className="mx-[5%] my-[5%] grid grid-cols-2">
      <div>
        <Title level={2}>Kindly fill out the measurements form</Title>

        <Form
          layout="vertical"
          onFinish={handleSubmit}
          form={form}
          initialValues={{
            size: size,
          }}
          onValuesChange={onFormLayoutChange}
          style={{
            maxWidth: formLayout === "vertical" ? "none" : 600,
          }}>
          <Form.Item layout="horizontal" label="Size" name="size">
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value="XS">XS</Radio.Button>
              <Radio.Button value="S">S</Radio.Button>
              <Radio.Button value="M">M</Radio.Button>
              <Radio.Button value="L">L</Radio.Button>
              <Radio.Button value="XL">XL</Radio.Button>
              <Radio.Button value="2XL">2XL</Radio.Button>
              <Radio.Button value="3XL">3XL</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Bust" name="bust" rules={[{ required: true, message: "Bust measurement required" }]}>
          <Input placeholder="in CM" />
        </Form.Item>

        <Form.Item label="Waist" name="waist" rules={[{ required: true, message: "Waist measurement required" }]}>
          <Input placeholder="in CM" />
        </Form.Item>

        <Form.Item label="Shoulder" name="shoulder" rules={[{ required: true, message: "Shoulder measurement required" }]}>
          <Input placeholder="in CM" />
        </Form.Item>

        <Form.Item label="Blouse Length" name="blouseLength" rules={[{ required: true, message: "Blouse length required" }]}>
          <Input placeholder="in CM" />
        </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
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
