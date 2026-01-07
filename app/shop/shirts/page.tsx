"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

const shirts = [
  {
    id: "shirt-1",
    name: "Cotton Baby Shirt",
    price: 5,
    image: "/images/shirts/shirt2.jpg",
  },
  {
    id: "shirt-2",
    name: "Striped Shirt",
    price: 6,
    image: "/images/shirts/shirts1.jpg",
  },
];

export default function ShirtsPage() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-8">Baby Shirts</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shirts.map((shirt) => (
          <div key={shirt.id} className="border rounded-xl p-4">
            <img
              src={shirt.image}
              alt={shirt.name}
              className="h-48 w-full object-cover rounded-lg mb-4"
            />

            <h3 className="font-medium">{shirt.name}</h3>
            <p className="text-gray-600">€{shirt.price}</p>

            <button
              onClick={() => addToCart(shirt)}
              className="mt-3 w-full bg-black text-white py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <Link href="/shop/cart" className="inline-block mt-8 underline">
        Go to Cart →
      </Link>
    </div>
  );
}
