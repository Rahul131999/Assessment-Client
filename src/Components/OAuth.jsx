import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function OAuth() {

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

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/google-auth`,
        userInfo
      );

      console.log('res', res)
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
