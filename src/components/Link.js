import React, { useState, useEffect } from "react";
import { Button, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { storage, db } from "../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

function Link() {
  const [imageUrls, setImageUrls] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [productDetails, setProductDetails] = useState("");
  const user = useSelector((state) => state.auth.user); // Get logged-in user

  useEffect(() => {
    if (user) {
      fetchUserImages();
    }
  }, [user]);

  const fetchUserImages = async () => {
  if (!user || !user.uid) return;

  try {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const data = userSnap.data();
      setImageUrls(data.images || []);
      setProductDetails(data.productDetails || "");
    } else {
      await setDoc(userRef, {
        images: [],
        productDetails: "",
      });
      setImageUrls([]);
      setProductDetails("");
    }
  } catch (error) {
    console.error("Firestore fetch error:", error);
    message.error("Failed to fetch user data.");
  }
};

  const handleUpload = async ({ file, onSuccess, onError }) => {
    if (!user) {
      message.error("Please log in to upload images.");
      return;
    }

    setUploading(true);
    const storageRef = ref(storage, `user_images/${user.uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Upload Error:", error);
        message.error("Upload failed.");
        setUploading(false);
        onError(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const updatedImages = [...imageUrls, downloadURL];
        setImageUrls(updatedImages);

        try {
          const userRef = doc(db, "users", user.uid);
          await updateDoc(userRef, { images: updatedImages });
          message.success("Image uploaded successfully!");
          onSuccess(); // Notify Upload component
        } catch (error) {
          message.error("Error saving image to Firestore: " + error.message);
        } finally {
          setUploading(false);
        }
      }
    );
  };

  const handleDelete = async (imageUrl) => {
    if (!user) return;

    try {
      const updatedImages = imageUrls.filter((img) => img !== imageUrl);
      setImageUrls(updatedImages);

      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { images: updatedImages });

      // Delete image from Firebase Storage
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
      message.success("Image deleted successfully!");
    } catch (error) {
      message.error("Error deleting image: " + error.message);
    }
  };
const handleProductDetailsChange = async (e) => {
    const newValue = e.target.value;
    setProductDetails(newValue);

    if (user) {
      try {
        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, { productDetails: newValue });
      } catch (error) {
        message.error("Failed to save product details: " + error.message);
      }
    }
  };
  return (
    <div>
      <Input
        style={{ margin: "5%", width: "90%" }}
        placeholder="Enter product details..."
        value={productDetails}
        onChange={handleProductDetailsChange}
      />
      <div style={{ margin: "5%", width: "90%" }}>
        <Upload
          customRequest={handleUpload}
          listType="picture"
          showUploadList={false}
        >
          <Button icon={<UploadOutlined />} loading={uploading}>
            {uploading ? "Uploading..." : "Click to Upload"}
          </Button>
        </Upload>
      </div>

      {/* Display Uploaded Images */}
      <div style={{ margin: "5%" }}>
        {imageUrls.map((url, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <img
              src={url}
              alt={`Uploaded ${index + 1}`}
              style={{ width: "100px", height: "100px", marginRight: "10px", objectFit: "cover" }}
            />
            <Button danger onClick={() => handleDelete(url)}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Link;