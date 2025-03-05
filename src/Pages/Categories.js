import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

// This is the main functional component
function Categories() {
  const cardData = [
    {
      title: "Blouse",
      description:
        "We offer expert blouse stitching services to help you achieve the perfect fit, style, and comfort. Whether you're looking for a custom-designed blouse to complement your saree, lehenga, or skirt, our team of skilled tailors is here to bring your vision to life.",
      image: "https://images-static.cloudtailor.com/Blouse.jpg",
    },
    {
      title: "Kurti",
      description:
        "Our custom kurti stitching service offers a blend of tradition and modern style. From straight-cut to A-line, and from short kurtis to long ones, we create the perfect fit and design to complement your style. Explore unique designs made just for you.",
      image: "https://images-static.cloudtailor.com/Kurta-kurti.jpg",
    },
    {
      title: "Salwar",
      description:
        "Get a perfect fit with our salwar stitching services. Whether you prefer a loose, comfortable fit or a more tailored style, we offer custom stitching options to suit your preference. Choose from various cuts and designs, including Patiala, straight-leg, or narrow.",
      image: "https://images-static.cloudtailor.com/Salwar-suit.jpg",
    },
    {
      title: "Churidar",
      description:
        "Our churidar stitching service ensures that your churidar fits perfectly, providing you with a sleek and stylish look. With options for different styles like pleated or gathered, we create churidars that match your desired aesthetic.",
      image: "https://images-static.cloudtailor.com/Top.jpg",
    },
    {
      title: "Skirt",
      description:
        "From casual to formal, our skirt stitching services offer a variety of designs to suit every occasion. Whether you want a pencil skirt, A-line, or pleated design, we ensure the perfect fit and quality to elevate your wardrobe.",
      image: "https://images-static.cloudtailor.com/Skirt.jpg",
    },
  ];

  return (
    <div className="card-container" style={{display:"flex",padding:"5%"}}>
      {cardData.map((item, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 240, margin: "15px" ,padding:"1%"}}
          cover={<img alt={item.title} src={item.image} />}
        >
          <Meta title={item.title} description={item.description} />
        </Card>
      ))}
    </div>
  );
}

export default Categories;
