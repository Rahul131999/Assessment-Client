import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function OAuth() {

  const navigate = useNavigate();

  async function handleGoogleClick() {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const userInfo = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };

      console.log('result', userInfo)
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
