import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Order from "@/lib/models/Order";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { cartItems, productTotal, gst, delivery, grandTotal } = await req.json();

    await connectDB();

    const newOrder = new Order({
      userId: decoded.id,
      cartItems,
      productTotal,
      gst,
      delivery,
      grandTotal,
    });

    await newOrder.save();

    return NextResponse.json({ message: "Order placed successfully" }, { status: 201 });
  } catch (error) {
    console.error("Order placement error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    await connectDB();

    const orders = await Order.find({ userId: decoded.id }).sort({ createdAt: -1 });

    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    console.error("Fetching orders error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
