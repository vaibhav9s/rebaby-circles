"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

export default function CheckoutChoicePage() {
  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle title="How would you like to receive your order?" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pickup */}
          <Card className="space-y-4">
            <h3 className="text-xl font-semibold">Pickup from Outlet</h3>
            <p className="text-gray-600">
              Collect your items directly from our outlet at your convenience.
            </p>

            <Link
              href="/checkout/success"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl text-center"
            >
              Choose Pickup
            </Link>
          </Card>

          {/* Delivery */}
          <Card className="space-y-4">
            <h3 className="text-xl font-semibold">Home Delivery</h3>
            <p className="text-gray-600">
              Get your items delivered to your home by filling a short form.
            </p>

            <Link
              href="/checkout/delivery"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl text-center"
            >
              Choose Delivery
            </Link>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
