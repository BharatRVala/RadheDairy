'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Loading from '../_components/Loading';
import Orders from '../_components/Orders';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import './profile.css';

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [isUpdating, setIsUpdating] = useState(false); // Added for update loading state
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token) {
      router.push('/loginRegister');
    } else {
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setFormData(parsedUser); // initialize form data
      }
      const timer = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(timer);
    }
  }, [router]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateProfile = async () => {
    setIsUpdating(true); // Start updating profile, show loading spinner

    try {
      const token = localStorage.getItem('token');

      const res = await fetch('/api/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Profile updated successfully!'); // Success toast
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        setEditMode(false);
      } else {
        toast.error(data.error || 'Failed to update profile.'); // Error toast
      }
    } catch (error) {
      console.error('Update profile error:', error);
      toast.error('Something went wrong.'); // Error toast on failure
    }

    setIsUpdating(false); // End updating, hide loading spinner
  };

  return (
    <>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <div className="profile-container">
          <h1 className="profile-title">
            {user ? `Welcome, ${user.fullName}` : 'Welcome, Guest'}
          </h1>

          {user ? (
            <>
              <div className="user-info">
                <p><strong>Full Name:</strong> {user.fullName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone || 'Not Provided'}</p>
                <p><strong>State:</strong> {user.state || 'Not Provided'}</p>
                <p><strong>City:</strong> {user.city || 'Not Provided'}</p>
                <p><strong>Address:</strong> {user.address || 'Not Provided'}</p>

                <button className="edit-btn" onClick={() => setEditMode(true)}>
                  Edit Profile
                </button>
              </div>

              <Orders />
            </>
          ) : (
            <p>No user data available.</p>
          )}
        </div>
      )}

      <Footer />

      {/* Modal for Editing */}
      {editMode && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Profile</h2>

            <div className="modal-input-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName || ''}
                onChange={handleInputChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="modal-input-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={formData.phone || ''}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="modal-input-group">
              <label htmlFor="state">State</label>
              <input
                id="state"
                type="text"
                name="state"
                value={formData.state || ''}
                onChange={handleInputChange}
                placeholder="Enter your state"
              />
            </div>

            <div className="modal-input-group">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                name="city"
                value={formData.city || ''}
                onChange={handleInputChange}
                placeholder="Enter your city"
              />
            </div>

            <div className="modal-input-group">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                name="address"
                value={formData.address || ''}
                onChange={handleInputChange}
                placeholder="Enter your address"
              />
            </div>

            <div className="modal-buttons">
              <button onClick={() => setEditMode(false)}>Cancel</button>
              <button onClick={handleUpdateProfile} disabled={isUpdating}>
                {isUpdating ? 'Updating...' : 'Update'}
              </button>
            </div>
          </div>
        </div>
      )}

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
    </>
  );
}

export default ProfilePage;
