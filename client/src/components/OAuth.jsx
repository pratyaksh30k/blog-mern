import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signinSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" }); //Always ask for which gmail account to login with. Dont auto select.
    try {
      const resultGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: resultGoogle.user.displayName,
          email: resultGoogle.user.email,
          googlePhotoURL: resultGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signinSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      className="flex text-center items-center justify-center gap-2 text-xl md:text-base font-semibold cursor-pointer px-4 py-2 border-2 border-solid border-black rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black hover:text-white"
      onClick={handleGoogleAuth}
    >
      <AiFillGoogleCircle size={23} />
      Continue with Google
    </button>
  );
}
