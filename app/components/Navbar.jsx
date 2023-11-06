import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserAuth from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
  return (
    <div className="h-16 border-b-2 flex items-center justify-between p-2">
      <ul className="flex gap-x-4 p-4">
        <li className="p-2 font-semibold text-white bg-neutral-500 px-3 rounded-3xl">
          <Link href="/">Home</Link>
        </li>
        {!user ? null : (
          <li className="p-2 font-semibold text-white bg-neutral-500 px-3 rounded-3xl">
            <Link href="/profile">Profile</Link>
          </li>
        )}

        <li className="p-2 font-semibold text-white bg-neutral-500 px-3 rounded-3xl">
          <Link href="/about">About</Link>
        </li>
      </ul>

      {loading ? null : !user ? (
        <ul className="flex gap-x-4 pr-4">
          <li
            onClick={handleSignIn}
            className="cursor-pointer font-semibold text-gray-700 bg-green-500 hover:bg-green-400 px-3 py-1 rounded-2xl"
          >
            Login
          </li>
          <li
            onClick={handleSignIn}
            className="cursor-pointer font-semibold text-gray-700 bg-green-500 hover:bg-green-400 px-3 py-1 rounded-2xl"
          >
            SignUp
          </li>
        </ul>
      ) : (
        <ul className="flex gap-x-4 pr-4">
          <li className="cursor-pointer font-semibold text-gray-700 bg-blue-500 px-3 py-1 rounded-2xl">
            Hey, {user.displayName.split(" ")[0]}
          </li>
          <li onClick={handleSignOut} className="cursor-pointer font-semibold text-gray-800 bg-red-500 px-3 py-1 rounded-2xl">
            SignOut
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
