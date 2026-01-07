"use client";

import { useCart } from "@/context/CartContext";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Section>
      <Container>
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span>{item.name}</span>
                  <span>€{item.price}</span>
                  <button
                    className="text-red-500 text-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-semibold">Total: €{total.toFixed(2)}</p>
            
            <Link href="/checkout">
              <Button className="mt-6 w-full">
              Place Order
            </Button>
            </Link>
          </>
        )}
      </Container>
    </Section>
  );
}
