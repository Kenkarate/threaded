import { Steps, Breadcrumb, Button } from "antd";
import Link from "../components/Link";
import ProductInfo from "../components/ProductInfo";
import Measurements from "./Measurements";
import Address from "./Address";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { doc, getDoc, collection, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { setFormData } from "../Utils/store/authSlice";

const { Step } = Steps;

function Process() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const formData = useSelector((state) => state.auth.formData || {});
  const dispatch = useDispatch();
  const updateFormData = (updatedData) => {
    dispatch(setFormData({ ...formData, ...updatedData }));
  };
  useEffect(() => {
    const fetchUserImages = async () => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          updateFormData({
            imageUrls: data.images || [],
            productDetails: data.productDetails || "",
          });
        }
      }
    };

    fetchUserImages();
  }, [user]);

  const handleNext = async () => {
    const stepValidation = {
      1: async () => {
        if (!formData.itemPrice) throw new Error("Item price required");
      },
      2: async () => {},
      3: async () => {
        if (!user) throw new Error("User not logged in");

        try {
          const cartRef = collection(doc(db, "users", user.uid), "cartItems");

          await addDoc(cartRef, {
            ...formData,
            timestamp: new Date(),
          });

          message.success("Cart item saved successfully!");
          dispatch(setFormData({}));
        } catch (err) {
          console.error("Firestore Error:", err);
          message.error("Failed to save cart data");
          throw err;
        }
      },
    };

    try {
      if (stepValidation[currentStep]) await stepValidation[currentStep]();

      if (currentStep === 3) {
        dispatch(setFormData(formData));
        navigate("/checkout",  { state: { formData } });
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Validation error:", error.message);
    }
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <Link />
          </div>
        );
      case 1:
        return (
          <div>
            <ProductInfo
              imageUrls={imageUrls}
              formData={formData}
              setFormData={updateFormData}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <Measurements formData={formData} setFormData={updateFormData} />
          </div>
        );
      case 3:
        return (
          <div>
            <Address formData={formData} setFormData={updateFormData} />
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
          <Step title="Link" />
          <Step title="Product Information" />
          <Step title="Measurements" />
          <Step title="Address" />
        </Steps>
      </div>
      <div
        style={{
          margin: "5% 10% 0 10%",
          border: "1px solid black",
          width: "80%",
        }}
      >
        {renderStepContent()}
        <div className="flex justify-center gap-4 mt-4 mb-6">
          {currentStep > 0 && <Button onClick={handlePrev}>Previous</Button>}
          {currentStep < 3 && (
            <Button type="primary" onClick={handleNext}>
              Next
            </Button>
          )}
          {currentStep === 3 && (
            <Button type="primary" onClick={handleNext}>
              Proceed to Checkout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Process;
