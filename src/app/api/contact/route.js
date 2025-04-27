// app/api/contact/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/db"; // Assuming you have a DB connection utility
import Contact from "@/lib/models/Contact";

export async function POST(req) {
  try {
    const { name, phone, email, subject, message } = await req.json();

    // Connect to the database
    await connectDB();

    // Create a new contact entry
    const newContact = new Contact({
      name,
      phone,
      email,
      subject,
      message,
    });

    // Save the contact form data
    await newContact.save();

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { error: "Something went wrong, please try again later." },
      { status: 500 }
    );
  }
}
