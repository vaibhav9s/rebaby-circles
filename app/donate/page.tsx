"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function PickupPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/pickup/success");
  };

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Book a Free Pickup
        </h1>

        {/* Instructions */}
        <div className="bg-mint-50 p-6 rounded-xl mb-10 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>We collect your pre-loved baby clothes for free.</li>
            <li>Our team carefully inspects and sanitizes all items.</li>
            <li>
              Selected items are shared with other families through our shop and
              pop-up events.
            </li>
          </ol>
        </div>

        {/* Accepted Items */}
        <div className="bg-white p-6 rounded-xl mb-10 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Accepted Items</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Baby clothing (0–24 months)</li>
            <li>Clean, gently used, good condition</li>
            <li>No stains, tears, or strong wear</li>
          </ul>
        </div>

        {/* Pickup Form */}
        <div className="bg-mint-50 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Schedule Your Free Pickup
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg border-gray-300"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg border-gray-300"
                placeholder="example@mail.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                className="w-full p-2 border rounded-lg border-gray-300"
                placeholder="+352 12345678"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Address
              </label>
              <textarea
                className="w-full p-2 border rounded-lg border-gray-300"
                placeholder="Street, City, ZIP"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Clothes Details
              </label>
              <textarea
                className="w-full p-2 border rounded-lg border-gray-300"
                placeholder="Type, size, approximate quantity"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Preferred Pickup Date
              </label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg border-gray-300"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Preferred Pickup Time
              </label>
              <input
                type="time"
                className="w-full p-2 border rounded-lg border-gray-300"
                required
              />
            </div>

            <Button type="submit" className="bg-pink-400 hover:bg-pink-500">
              Book a Free Pickup
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}