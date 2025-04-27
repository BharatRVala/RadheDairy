import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; // Ensure this CSS import is here for toast styles

function Login({ switchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const router = useRouter();

  const handlelogin = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Set loading to true when starting login

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Login failed"); // Toastify error notification
        setIsLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login successful! Redirecting..."); // Success notification
      setTimeout(() => {
        router.push("/");
      }, 1500);

      // Clear form
      setEmail("");
      setPassword("");
    } catch (err) {
      toast.error("Something went wrong. Please try again."); // Error notification for server failure
      console.error("Login error:", err);
    } finally {
      setIsLoading(false); // Set loading to false after processing
    }
  };

  return (
    <div className="form-container">
      <form className="authForm" onSubmit={handlelogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit" disabled={isLoading}>Login</button>

        {/* Show loading spinner when processing */}
        {isLoading && <div className="loading-spinner"></div>}
      </form>
      <p className="toggle-text">
        Don't have an account?{" "}
        <span onClick={switchToRegister} className="link-btn">
          Register
        </span>
      </p>

      {/* Toastify ToastContainer component */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Login;
