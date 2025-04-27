import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; // Ensure this CSS import is here for toast styles

function Login({ switchToRegister }) {
  const [email, setEmail] = useState("");  // Initialize email state
  const [password, setPassword] = useState("");  // Initialize password state
  const [isLoading, setIsLoading] = useState(false);  // Loading state to manage login status

  const router = useRouter();

  const handlelogin = async (e) => {
    e.preventDefault();  // Prevent default form submission

    setIsLoading(true);  // Set loading state to true when login starts

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),  // Send email and password as request body
      });

      const data = await res.json();  // Parse the response JSON

      if (!res.ok) {
        toast.error(data.error || "Login failed"); // Show error toast if login fails
        setIsLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);  // Save the token in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));  // Save user info in localStorage

      toast.success("Login successful! Redirecting...");  // Show success toast
      setTimeout(() => {
        router.push("/");  // Redirect after success
      }, 1500);

      // Clear form inputs
      setEmail("");
      setPassword("");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");  // Handle errors
      console.error("Login error:", err);  // Log error for debugging
    } finally {
      setIsLoading(false);  // Set loading to false after process ends
    }
  };

  return (
    <div className="form-container">
      <form className="authForm" onSubmit={handlelogin}>
        <h1>Login</h1>
        <input
          type="email"  // Use 'email' type for better input validation
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Handle email change
          required
        />
        <input
          type="password"  // Password input type
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Handle password change
          required
        />
        
        <button type="submit" disabled={isLoading}>Login</button>  // Disable button during loading

        {/* Show loading spinner when isLoading is true */}
        {isLoading && <div className="loading-spinner"></div>} 
      </form>
      
      <p className="toggle-text">
  Don&apos;t have an account?{" "}
  <span onClick={switchToRegister} className="link-btn">
    Register
  </span>
</p>


      {/* Toastify ToastContainer component for notifications */}
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
