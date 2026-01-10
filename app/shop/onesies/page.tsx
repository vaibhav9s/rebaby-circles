"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

const shirts = [
  {
    id: "onesies-1",
    name: "Organic Cotton Onesie",
    price: 5,
    image: "/images/onesies/onesies1.jpg",
  },
  {
    id: "onesies-2",
    name: "Sleep & Play Onesie",
    price: 6,
    image: "/images/onesies/onesies2.jpg",
  },
];

export default function OnesiesPage() {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (item: any) => {
    addToCart(item);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-8">Onesies</h1>

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
              onClick={() => handleAddToCart(shirt)}
              className="mt-3 w-full bg-black text-white py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <Link href="/shop/cart" className="inline-block mt-8 underline">
        <Button className="bg-pink-400 hover:bg-pink-500">
          Go to Cart
        </Button>
      </Link>

      {/* Toast popup */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 w-[90%] max-w-sm">
          <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-xl text-lg font-semibold">
            ✅ Item added to cart
          </div>
        </div>
      )}
    </div>
  );
}
