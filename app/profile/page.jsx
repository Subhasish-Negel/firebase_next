"use client"
 import { useEffect, useState } from "react";
import UserAuth from "../context/AuthContext";
import Loader from "../components/Loader";

const Profile = () => {
  const { user} = UserAuth();
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-4 flex h-screen items-center justify-center">
      {loading ? <Loader/>: !user ? (<h3>Oops! Please Log In in Order To View Your Profile</h3>) : (
        <h3>Hey {user.displayName.split(" ")[0]}, This is your Profile</h3>
      )}
      
    </div>
  )
}

export default Profile