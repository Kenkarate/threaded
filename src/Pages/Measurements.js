import { Typography, Form, Input, Radio } from "antd";
import React, { useEffect, useState } from "react";
import measureImage from ".././Assets/images/measure.webp";

const { Title } = Typography;

function Measurements({ formData, setFormData }) {
  const [form] = Form.useForm();
  const [size, setSize] = useState(formData.size || null);

  useEffect(() => {
    form.setFieldsValue({
      size: formData.size || null,
      bust: formData.bust || "",
      waist: formData.waist || "",
      shoulder: formData.shoulder || "",
      blouseLength: formData.blouseLength || "",
    });
  }, [formData, form]);

  const handleSizeChange = (e) => {
    const selectedSize = e.target.value;
    setSize(selectedSize);
    setFormData({ ...formData, size: selectedSize });
    form.setFieldsValue({ size: selectedSize });
  };

  const handleValuesChange = (_, allValues) => {
    setFormData({ ...formData, ...allValues });
  };

  return (
    <div className="mx-[5%] my-[5%] grid lg:grid-cols-2">
      <div className="mx-[2%]">
        <Title level={2}>Kindly fill out the measurements form</Title>

        <Form
          form={form}
          layout="vertical"
          onValuesChange={handleValuesChange}
        >
          <Form.Item
            label="Size"
            name="size"
            rules={[{ required: true, message: "Please select a size" }]}
          >
            <Radio.Group value={size} onChange={handleSizeChange}>
              {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((sizeOption) => (
                <Radio.Button key={sizeOption} value={sizeOption}>
                  {sizeOption}
                </Radio.Button>
              ))}
            </Radio.Group>
          </Form.Item>

          {[
            { name: "bust", label: "Bust" },
            { name: "waist", label: "Waist" },
            { name: "shoulder", label: "Shoulder" },
            { name: "blouseLength", label: "Blouse Length" },
          ].map(({ name, label }) => (
            <Form.Item
              key={name}
              label={label}
              name={name}
              rules={[{ required: true, message: `${label} measurement required` }]}
            >
              <Input placeholder="in CM" />
            </Form.Item>
          ))}
        </Form>
      </div>

      <div className="border-l-2 pl-5">
        <Title level={2}>How to measure</Title>
        <img src={measureImage} alt="Measurement Guide" />
      </div>
    </div>
  );
}

export default Measurements;