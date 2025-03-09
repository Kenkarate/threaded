import { Button} from "antd";
import React from "react";
import { useParams } from 'react-router-dom';
function TypeOfDesign() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title); 
  const category = JSON.parse(localStorage.getItem("selectedCategory"));
   if (!category || category.title !== decodedTitle) {
     return <h2>Category not found. Please select a category again.</h2>;
   }

  return (
    <div className="mx-[10%] my-[10%] grid lg:grid-cols-2 ">
      <div>
      </div>
      <div className=" text-right">
        <Button className="py-4">Talk to your designer</Button>
      </div>
      <div className="details-container">
      <h1>{category.title}</h1>
      <img src={category.image} alt={category.title} />
      <p>{category.description}</p>
    </div>
    </div>
  );
}

export default TypeOfDesign;
 