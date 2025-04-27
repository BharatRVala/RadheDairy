"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Loading from "../_components/Loading";

import Login from "../_components/Login";
import Register from "../_components/Register";
import "./loginRegister.css";

function LoginRegister() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // If token exists, redirect to profile
      router.push("/profile");
    } else {
      // Otherwise, show login/register UI
      setActiveTab("login");
      const timer = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(timer);
    }
  }, [router]);

  return (
    <>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="logincontainer">
            <div className="login-container">
              <div className="login-wrapper">
                {activeTab === "login" && (
                  <Login switchToRegister={() => setActiveTab("register")} />
                )}
                {activeTab === "register" && (
                  <Register switchToLogin={() => setActiveTab("login")} />
                )}
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default LoginRegister;
