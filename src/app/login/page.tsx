"use client";


import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/config/firebase";
import { login } from "@/services/login/auth";
import { UserPostType, UserType } from "@/interfaces/login/userType";

const Page = () => {
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);

    const userObj: UserPostType = {
      email: user.email || "",
      photo: user.photoURL || "",
      name: user.displayName || "",
    };

    const { data, msg } = await login<UserType>(userObj);
    console.log(data.id);
  };

  return (
    <div>
      <button onClick={loginGoogle}>Google</button>
    </div>
  );
};

export default Page;
