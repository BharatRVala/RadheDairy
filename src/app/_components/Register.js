import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; // Ensure this CSS import is here for toast styles

function Register({ switchToLogin }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      toast.error("Passwords do not match"); // Toastify error notification
      return;
    }

    setError("");
    setIsLoading(true); // Set loading to true when starting registration

    const formData = {
      fullName,
      email,
      phone,
      state,
      zip,
      city,
      address,
      password,
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        if (data.error === "Email already exists") {
          setError("This email is already registered");
          toast.error("This email is already registered"); // Error notification for duplicate email
        } else {
          setError(data.error);
          toast.error(data.error); // General error notification
        }
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(formData));

        setSuccessMessage("Registration successful. Redirecting...");
        toast.success("Registration successful. Redirecting..."); // Success notification

        setTimeout(() => {
          router.push('/'); // Redirect to home after registration
          switchToLogin(); // Switch to the login screen
        }, 1500);
      }
    } catch (err) {
      setError("Something went wrong");
      toast.error("Something went wrong"); // Error notification for server failure
      console.error("Error during registration:", err);
    } finally {
      setIsLoading(false); // Set loading to false after processing
    }
  };

  return (
    <div className="form-container">
      <form className="registrationForm" onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="ZIP Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter address (e.g. Society, Flat No., Apartment, Village)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        
        <button type="submit" disabled={isLoading}>Register</button>

        {/* Show loading spinner when processing */}
        {isLoading && <div className="loading-spinner"></div>}
      </form>
      <p className="toggle-text">
        Already have an account?{" "}
        <span onClick={switchToLogin} className="link-btn">
          Login
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

export default Register;
