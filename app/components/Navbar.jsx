import Link from "next/link";
import React from "react";
import UserAuth from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-16 border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2">
          <Link href="/profile">Profile</Link>
        </li>
        <li className="p-2">
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ul className="flex gap-x-4 pr-4">
        <li onClick={handleSignIn} className="cursor-pointer">
          Login
        </li>
        <li onClick={handleSignIn} className="cursor-pointer">
          SignUp
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
