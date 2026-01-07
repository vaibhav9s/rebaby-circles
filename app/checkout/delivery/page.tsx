"use client";

import { useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function DeliveryFormPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/checkout/success");
  }

  return (
    <Section>
      <Container className="max-w-xl space-y-8">
        <SectionTitle title="Delivery Details" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            placeholder="Full Name"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            required
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            required
            placeholder="Delivery Address"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            required
            type="date"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            required
            type="time"
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl"
          >
            Confirm Delivery
          </button>
        </form>
      </Container>
    </Section>
  );
}
