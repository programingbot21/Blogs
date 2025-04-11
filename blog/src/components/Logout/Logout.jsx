import React from 'react';
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login"); 
  };

    return (
        <div>
            <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
    >
      Logout
    </button>
        </div>
    );
}

export default Logout;
