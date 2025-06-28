import React, { useState } from "react";
import { Card, Radio, Typography, Button, Divider, message, Space } from "antd";
import { collection, doc, addDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";

const { Title, Text } = Typography;

function CheckoutPage({ user, db, onPaymentSuccess }) {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [loading, setLoading] = useState(false);

  console.log("Checkout formData:", formData);

  if (!formData || Object.keys(formData).length === 0) {
    return <div>No order data found. Please complete your order first.</div>;
  }
  const handlePayment = async () => {
    if (!user) {
      message.error("User not logged in");
      return;
    }

    setLoading(true);
    try {
      const cartRef = collection(doc(db, "users", user.uid), "cartItems");

      await addDoc(cartRef, {
        ...formData,
        paymentMethod,
        timestamp: new Date(),
      });

      message.success(
        paymentMethod === "cod"
          ? "Order placed successfully with Cash on Delivery!"
          : "Mock card payment successful!"
      );

      setTimeout(() => {
        onPaymentSuccess();
      }, 1000);
    } catch (err) {
      console.error("Firestore Error:", err);
      message.error("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[800px] mx-auto p-6">
      <Title level={2}>Checkout</Title>

      {/* Uploaded Images */}
      {formData.imageUrls?.length > 0 && (
        <Card title="Uploaded Images" className="mb-4">
          <Space wrap>
            {formData.imageUrls.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`upload-${i}`}
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            ))}
          </Space>
        </Card>
      )}

      <Card title="Order Summary" className="mb-4">
        <Space direction="vertical" size="small">
          <Text>
            <strong>Product Details:</strong> {formData.productDetails}
          </Text>
          <Text>
            <strong>Price:</strong> ₹{formData.itemPrice}
          </Text>
          <Text>
            <strong>Size / Measurements:</strong>
          </Text>
          <div style={{ paddingLeft: 16 }}>
            <Text>Waist: {formData.waist}</Text>
            <br />
            <Text>Bust: {formData.bust}</Text>
            <br />
            <Text>Shoulder: {formData.shoulder}</Text>
            <br />
            <Text>Blouse Length: {formData.blouseLength}</Text>
          </div>
          <Text>
            <strong>Shipping Address:</strong>
          </Text>
          <div style={{ paddingLeft: 16 }}>
            <Text>
              {formData.firstname} {formData.lastname}
            </Text>
            <br />
            <Text>{formData.address}</Text>
            <br />
            <Text>
              {formData.city}, {formData.state} {formData.pincode}
            </Text>
            <br />
            <Text>{formData.country}</Text>
          </div>
          <Text>
            <strong>Shipping:</strong> Free
          </Text>
          <Divider />
          <Text strong>Total: ₹{formData.itemPrice}</Text>
        </Space>
      </Card>
      {/* Payment Method */}
      <Card title="Select Payment Method" className="mb-4">
        <Radio.Group
          onChange={(e) => setPaymentMethod(e.target.value)}
          value={paymentMethod}
        >
          <Radio value="cod">Cash on Delivery</Radio>
          <Radio value="card">Credit/Debit Card (Mock)</Radio>
        </Radio.Group>

        {paymentMethod === "card" && (
          <div className="mt-4">
            <Text type="secondary">
              This is a demo. No real payment processing.
            </Text>
            <Space direction="vertical" className="mt-2">
              <Text>Card Number: 4111 1111 1111 1111</Text>
              <Text>Expiry: 12/26</Text>
              <Text>CVV: 123</Text>
            </Space>
          </div>
        )}
      </Card>

      {/* Confirm Button */}
      <Button
        type="primary"
        size="large"
        block
        onClick={handlePayment}
        loading={loading}
      >
        Confirm & Pay
      </Button>
    </div>
  );
}

export default CheckoutPage;
