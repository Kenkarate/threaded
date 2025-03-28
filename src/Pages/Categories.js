import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect }  from "react";
import { useSelector } from "react-redux";
import {Link } from "react-router-dom"
 // This is the main functional component
 const cardData = [
  {
    title: "Blouse",
    description:
      "We offer expert blouse stitching services to help you achieve the perfect fit, style, and comfort. Whether you're looking for a custom-designed blouse to complement your saree, lehenga, or skirt, our team of skilled tailors is here to bring your vision to life.",
    image: "https://images-static.cloudtailor.com/Blouse.jpg",
  },
  
  {
    title: "Churidar",
    description:
      "Our churidar stitching service ensures that your churidar fits perfectly, providing you with a sleek and stylish look. With options for different styles like pleated or gathered, we create churidars that match your desired aesthetic.",
    image: "https://images-static.cloudtailor.com/Top.jpg",
  },
  
];
function Categories() {
  const user = useSelector((state) => state.auth?.user || null);
  useEffect(() => {
    if (user) {
      console.log("User Email:", user.email);
      console.log("User Name:", user.name);
    } else {
      console.log("No user logged in");
    }
  }, [user]); 
  return (
    <div className="card-container grid md:grid-col-2 sm:grid-col-2  lg:grid-cols-4 p-[5%]">
      {cardData.map((item, index) => (
        <Link
        key={item.title}
      to={`/typeofdesign/${encodeURIComponent(item.title)}`}>
        <Card
          hoverable
          style={{ width: 240, margin: "15px" ,padding:"1%"}}
          cover={<img alt={item.title} src={item.image} />}>
          <Meta title={item.title} description={item.description} />
        </Card>
        </Link>
      ))}
      {user ? (
        <p>Welcome, {user.name} ({user.email})</p>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default Categories;
