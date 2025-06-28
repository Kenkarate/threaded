import React, { useEffect } from "react";
import { Form, Input } from "antd";
import Title from "antd/es/typography/Title";

function ProductInfo({ imageUrls, formData, setFormData }) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ itemPrice: formData.itemPrice || "" });
  }, [formData, form]);

  return (
    <div className="p-[2%]">
      <Title>Please enter the details below:</Title>
      <Form
        form={form}
        layout="vertical"
        onValuesChange={(changed, all) => setFormData({ ...formData, ...all })}
      >
        <div className="grid grid-cols-2 gap-2">
          <Form.Item
            name="itemPrice"
            label="Item Price"
            rules={[{ required: true, message: "Please enter item price" }]}
          >
            <Input />
          </Form.Item>

          <div className="p-2 border-l-2 flex items-center justify-center">
            {formData.imageUrls?.length > 0 ? (
              <img
                src={formData.imageUrls[0]}
                alt="Uploaded Product"
                className="w-[150px] h-[150px] object-cover border-2"
              />
            ) : (
              <p className="text-gray-500">No image uploaded</p>
            )}
          </div>
        </div>
      </Form>
    </div>
  );
}

export default ProductInfo;
