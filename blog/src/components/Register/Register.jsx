// import React from 'react';
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// const Register = () => {


//     const [formData, setFormData] = useState({
//         username: "",
//         email: "",
//         password: "",
//       });
//       const [error, setError] = useState("");
//       const navigate = useNavigate();
    
//       const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//       };
    
//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError("");
//         try {
//           await axios.post("http://localhost:7000/api/auth/register", formData);
//           alert("Registration successful! Please log in.");
//           navigate("/login");
//         } catch (err) {
//           setError(err.response?.data?.msg || "Registration failed");
//         }
//       };

//     return (
//         <div>
//             <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             className="w-full p-2 mb-3 border rounded"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full p-2 mb-3 border rounded"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full p-2 mb-3 border rounded"
//             onChange={handleChange}
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//           >
//             Register
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-600">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//         </div>
//     );
// }

// export default Register;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:7000/api/auth/register",
        formData
      );
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-3 border rounded-xl"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-xl"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-xl"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
