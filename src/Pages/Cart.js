import { Card, Button, Space, Typography, message } from "antd";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

function CartPage() {
  const user = useSelector((state) => state.auth.user);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      if (user) {
        const cartRef = collection(doc(db, "users", user.uid), "cartItems");
        const snapshot = await getDocs(cartRef);
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCartItems(items);
      }
    };

    fetchCartItems();
  }, [user]);

  const handleDelete = async (id) => {
    try {
      const itemRef = doc(doc(db, "users", user.uid), "cartItems", id);
      await deleteDoc(itemRef);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      message.success("Item removed from cart");
    } catch (err) {
      console.error(err);
      message.error("Failed to remove item");
    }
  };

  const handleCheckout = (item) => {
    navigate("/checkout", { state: { formData: item } });
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h1>Your Cart</h1>
      <Space direction="vertical" style={{ width: "100%" }}>
        {cartItems.length === 0 ? (
          <Text>No items in your cart.</Text>
        ) : (
          cartItems.map((item) => (
            <Card
              key={item.id}
              title={item.productDetails || "Product"}
              cover={
                item.imageUrls && item.imageUrls.length > 0 ? (
                  <img
                    alt="product"
                    src={item.imageUrls[0]}
                    style={{ objectFit: "cover", height: 200 }}
                  />
                ) : null
              }
              actions={[
                <Button
                  type="primary"
                  onClick={() => handleCheckout(item)}
                  key="checkout"
                >
                  Proceed to Checkout
                </Button>,
                <Button
                  danger
                  onClick={() => handleDelete(item.id)}
                  key="delete"
                >
                  Delete
                </Button>,
              ]}
            >
              <Text><strong>Price:</strong> ₹{item.itemPrice}</Text><br/>
              <Text><strong>Size:</strong> {item.size}</Text><br/>
              <Text><strong>Waist:</strong> {item.waist}</Text><br/>
              <Text><strong>Shoulder:</strong> {item.shoulder}</Text>
              {/* Add more if needed */}
            </Card>
          ))
        )}
      </Space>
    </div>
  );
}

export default CartPage;
