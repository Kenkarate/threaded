import { Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

function ProductInfo() {
  return (
    <div className="p-[2%] ">
      <Title>Please enter the details below: </Title>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Form.Item
            name={["user", "name"]}
            label="Item Price"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="p-2 border-l-2 ">
          <p>Image should appear here</p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
