import { Button, Select } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";

function TypeOfDesign() {
  // State to track the selected dress
  const [selectedDress, setSelectedDress] = useState("");

  // Sample data: map dresses to their respective design types
  const dressOptions = [
    {
      name: "Princess Cut Blouse",
      designs: ["Floral", "Abstract", "Geometric"],
    },
    { name: "Sleeveless Blouse", designs: ["Classic", "Modern", "Boho"] },
    { name: "Darted Blouse", designs: ["Elegant", "Vintage", "Casual"] },
    { name: "Embroidery Blouse", designs: ["Elegant", "Vintage", "Casual"] },
    { name: "Pattern Blouse", designs: ["Elegant", "Vintage", "Casual"] },
  ];

  // Handle dress selection
  const handleDressChange = (value) => {
    setSelectedDress(value);
  };

  // Find the designs for the selected dress
  const selectedDressDetails = dressOptions.find(
    (dress) => dress.name === selectedDress
  );

  return (
    <div className="mx-[10%] my-[10%] grid lg:grid-cols-2 ">
      <div>
        <Title className="text-xl text-bold font-600 my-[2%]">
          Select a Dress
        </Title>
        <Select
          onChange={handleDressChange} // value passed directly here
          value={selectedDress}
          style={{ width: "100%" }}
        >
          <Select.Option value="">-- Choose a Dress --</Select.Option>
          {dressOptions.map((dress, index) => (
            <Select.Option key={index} value={dress.name}>
              {dress.name}
            </Select.Option>
          ))}
        </Select>

        {selectedDress && selectedDressDetails && (
          <div>
            <Title className="my-[2%]" level={2}>
              Available Designs for <span className="text-red-500">{selectedDress}</span>
            </Title>
            <ul>
              {selectedDressDetails.designs.map((design, index) => (
                <div>
                  <li key={index}>{design}</li>
                  <Button>Select</Button>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" text-right">
        <Button className="py-4">Talk to your designer</Button>
      </div>
    </div>
  );
}

export default TypeOfDesign;
