import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../Utils/store/authSlice";
import { auth, db } from "../../Firebase"; // Import Firebase
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { persistor } from "../Utils/store/store";

const AuthButton = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user || null);

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const loggedInUser = result.user;

      // Check if user exists in Firestore
      const userRef = doc(db, "users", loggedInUser.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        // If new user, add to Firestore
        await setDoc(userRef, {
          uid: loggedInUser.uid,
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        });
      }

      // Store user in Redux
      dispatch(
        loginUser({
          uid: loggedInUser.uid,
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        })
      );
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logoutUser());
      persistor.purge(); // Clears Redux-Persist state
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button onClick={user ? handleLogout : handleGoogleLogin}>
      {user ? `Logout (${user.name})` : "Login with Google"}
    </button>
  );
};

export default AuthButton;