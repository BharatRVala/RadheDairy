# 🥛 RadheDairy – Online Milk & Dairy Product Store

A **beautiful, responsive dairy e-commerce web app** built using **Next.js** and **Tailwind CSS**, integrated with **MongoDB** for managing products, cart, and orders.  
It provides a **complete online shopping experience** with add-to-cart, checkout, and order tracking features — designed for both desktop and mobile users.

🔗 **Live Demo:** [https://radhe-dairy.vercel.app/](https://radhe-dairy.vercel.app/)  
📂 **GitHub Repo:** [https://github.com/BharatRVala/RadheDairy](https://github.com/BharatRVala/RadheDairy)

---

## 🚀 Overview

**RadheDairy** is an online platform for browsing and purchasing dairy products like milk, curd, butter, and ghee.  
Users can:
- View products with details and prices  
- Add items to the cart  
- Proceed to checkout  
- View their order history after successful purchase  

This project focuses on **smooth user experience**, **real-time updates**, and **secure data handling** using MongoDB.

---

## 🧠 Features

### 🛍️ Product Management
- Dynamic product listing from MongoDB
- Categories (Milk, Butter, Curd, Ghee, Cheese, etc.)
- Product details with images, price, and description
- Admin can add/edit/delete products easily (optional extension)

### 🛒 Cart & Checkout System
- Add or remove products from the cart
- Automatically calculates subtotal and total price
- Checkout page with user details form
- Order confirmation screen with success message

### 📦 Order Management
- Each order is stored in MongoDB with:
  - Order ID
  - Customer Name
  - Product List
  - Total Amount
  - Order Status (`Pending`, `Processing`, `Delivered`)
- User can view their order history
- Admin can update order status (optional feature)

### 🔐 Authentication (Optional)
- Login/Register functionality using JWT or NextAuth
- Orders linked to logged-in user
- Secure checkout for authenticated customers

### 💬 Toast Notifications
- Real-time success/error messages (using `react-toastify`)
  - Example: “🛒 Product added to cart!”
  - Example: “✅ Order placed successfully!”

### 🎨 UI & UX
- Built with **Next.js + Tailwind CSS**
- Clean, minimal design with soft colors and smooth transitions
- Responsive for mobile, tablet, and desktop
- Animations using **Framer Motion**

---

## 🧾 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | Next.js (React), Tailwind CSS |
| Backend | Next.js API Routes (Node.js) |
| Database | MongoDB (Mongoose ORM) |
| State Management | React Context API |
| UI/UX | Framer Motion, React Toastify |
| Deployment | Vercel |

---
