import React from "react";
import { Typography, Result, Button } from "antd";

function ThankYouPage({ onBackToHome }) {
  return (
    <div className="max-w-[700px] mx-auto p-6 text-center">
      <Result
        status="success"
        title="Thank You for Your Purchase!"
        subTitle="We’ve received your order and will begin processing it shortly."
        extra={[
          <Button type="primary" key="home" onClick={onBackToHome}>
            Back to Home
          </Button>,
        ]}
      />
    </div>
  );
}

export default ThankYouPage;
