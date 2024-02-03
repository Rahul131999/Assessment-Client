import React, { useContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../App";

export default function OAuth() {
  const {userData, setUserData} = useContext(UserContext)
  const navigate = useNavigate();

  async function handleGoogleClick() {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const userInfo = {
        email: result.user.email,
        photo: result.user.photoURL,
      };

      const respnse = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/google-auth`,
        userInfo
      );

      const userData = respnse.data

      document.cookie = `access_token=${userData?.token}`

      const {token, ...safeUserData} = userData 

      console.log('res', safeUserData)
      setUserData(safeUserData)

      navigate("/home");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-orange-500 text-white p-3 rounded-lg hover:opacity-80"
    >
      Continue With Google
    </button>
  );
}
