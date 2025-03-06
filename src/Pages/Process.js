import React, { useState } from "react";
import { Steps, Breadcrumb, Input, Button } from "antd";

const { Step } = Steps;

function Process() {
  // Step state to track current step
  const [currentStep, setCurrentStep] = useState(0);

  // Handle next button click
  const handleNext = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  // Handle previous button click
  const handlePrev = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  // Conditional rendering of the Input fields based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <Input
              style={{ margin: "5%", width: "90%" }}
              placeholder="Paste your link here..."
            />
            <Button type="primary" onClick={handleNext} style={{ margin: "5%" }}>
              Next
            </Button>
          </div>
        );
      case 1:
        return (
          <div>
            <Input
              style={{ margin: "5%", width: "90%" }}
              placeholder="Enter product details..."
            />
            <Button type="primary" onClick={handleNext} style={{ margin: "5%" }}>
              Next
            </Button>
            <Button onClick={handlePrev} style={{ margin: "5%" }}>
              Previous
            </Button>
          </div>
        );
      case 2:
        return (
          <div>
            <Input
              style={{ margin: "5%", width: "90%" }}
              placeholder="Enter your measurements..."
            />
            <Button type="primary" onClick={handleNext} style={{ margin: "5%" }}>
              Next
            </Button>
            <Button onClick={handlePrev} style={{ margin: "5%" }}>
              Previous
            </Button>
          </div>
        );
      case 3:
        return (
          <div>
            <Input
              style={{ margin: "5%", width: "90%" }}
              placeholder="Enter payment details..."
            />
            <Button type="primary" onClick={handleNext} style={{ margin: "5%" }}>
              Next
            </Button>
            <Button onClick={handlePrev} style={{ margin: "5%" }}>
              Previous
            </Button>
          </div>
        );
      default:
        return <div>All steps completed</div>;
    }
  };

  return (
    <div style={{ margin: "2%" }}>
      <div>
        <Breadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: "Process",
            },
          ]}
        />
      </div>
      <div style={{ margin: "2% 10% 0 10%" }}>
        <Steps size="small" current={currentStep}>
          <Step title="Type" />
          <Step title="Product Information" />
          <Step title="Measurements" />
          <Step title="Payments" />
        </Steps>
      </div>
      <div
        style={{
          margin: "5% 20% 0 20%",
          border: "1px solid black",
          width: "50%",
        }}
      >
        {renderStepContent()}
      </div>
    </div>
  );
}

export default Process;
