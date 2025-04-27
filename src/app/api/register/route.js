import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/db";
import User from "@/lib/models/User";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const {
      fullName,
      email,
      phone,
      state,
      zip,
      city,
      address,
      password,
    } = await req.json();

    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      phone,
      state,
      zip,
      city,
      address,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET, // Secret from .env
      { expiresIn: "1h" } // Token expiration time (optional)
    );

    // Return success response with JWT Token
    return NextResponse.json(
      { message: "User registered successfully", token },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
