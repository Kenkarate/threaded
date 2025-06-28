import { Button, Form, Input, Select, Typography, message } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../../Firebase";
import { doc, collection, addDoc } from "firebase/firestore";


const { Title } = Typography;

function Address({ formData, setFormData, handleNext }) {
  const [form] = Form.useForm();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    form.setFieldsValue({
      country: formData.country || undefined,
      firstname: formData.firstname || "",
      lastname: formData.lastname || "",
      address: formData.address || "",
      city: formData.city || "",
      state: formData.state || "",
      pincode: formData.pincode || "",
    });
  }, [formData, form]);

  const handleValuesChange = (_, allValues) => {
    setFormData({ ...formData, ...allValues });
  };

  const handleNextStep = async () => {
    try {
      const values = await form.validateFields();
      const updatedFormData = { ...formData, ...values };
      setFormData(updatedFormData);

      if (!user) {
        message.error("User not logged in.");
        return;
      }

      const cartRef = collection(doc(db, "users", user.uid), "cartItems");

      await addDoc(cartRef, {
        images: updatedFormData.images || [],
        productDetails: updatedFormData.productDetails || "",
        price: updatedFormData.price || "",
        measurements: updatedFormData.measurements || {},
        address: {
          country: values.country,
          firstname: values.firstname,
          lastname: values.lastname,
          address: values.address,
          city: values.city,
          state: values.state,
          pincode: values.pincode,
        },
        timestamp: new Date(),
      });

      message.success("Cart item saved!");
      handleNext(); // Move to Payment step
    } catch (error) {
      console.error("Error saving cart item:", error);
      message.error("Please fill all required fields.");
    }
  };

  return (
    <div className="p-[5%]">
      <div>
        <Title level={2}>Delivery</Title>
        <Form
          layout="vertical"
          form={form}
          style={{ maxWidth: 600 }}
          onValuesChange={handleValuesChange}
        >
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: "Please select your country" }]}
          >
            <Select placeholder="Select Country">
              <Select.Option value="India">India</Select.Option>
              <Select.Option value="USA">USA</Select.Option>
              <Select.Option value="Canada">Canada</Select.Option>
            </Select>
          </Form.Item>

          <div className="grid grid-cols-2 gap-2">
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[{ required: true, message: "First name is required" }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[{ required: true, message: "Last name is required" }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </div>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Address is required" }]}
          >
            <Input placeholder="Street Address" />
          </Form.Item>

          <div className="grid grid-cols-3 gap-2">
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: "City is required" }]}
            >
              <Input placeholder="City" />
            </Form.Item>
            <Form.Item
              label="State"
              name="state"
              rules={[{ required: true, message: "State is required" }]}
            >
              <Input placeholder="State" />
            </Form.Item>
            <Form.Item
              label="Pincode"
              name="pincode"
              rules={[{ required: true, message: "Pincode is required" }]}
            >
              <Input placeholder="Pincode" />
            </Form.Item>
          </div>
        </Form>
      </div>

      <div className="border-t-2 my-[5%]">
        <Title>Shipping Method</Title>
        <p>Enter your shipping address to view available shipping options</p>
      </div>
    </div>
  );
}

export default Address;