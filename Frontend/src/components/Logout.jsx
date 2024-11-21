import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth(); //context se user le rhe hain
// frontend/src/components/Logout.jsx
const handleLogout = () => {
  try {
    setAuthUser({ user: null });
    localStorage.removeItem("Users");
    localStorage.removeItem("token"); // Remove the token on logout
    toast.success("Logout successfully");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (error) {
    toast.error("Error: " + error);
  }
};


  return (
    <div>
      <button
        className="px-3 py-2 bg-teal-700 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
